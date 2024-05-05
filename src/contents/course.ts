import markdownit from "markdown-it";
import type { PlasmoCSConfig } from "plasmo";
import { toEscapedEUCJP } from "./util/encoding";
import { getCourseTitle } from "./util/functions";
import { defaultSaves } from "./util/settings";
import type { Saves } from "./util/settings";
import type { RuntimeMessage } from "~background";

export const config: PlasmoCSConfig = {
  matches: ["https://scombz.shibaura-it.ac.jp/lms/course*"],
  run_at: "document_end",
};

//アンケートを取得するかどうかの設定を科目別ページに挿入
const insertSurveyBtnOnSubj = async () => {
  if (location.href.startsWith("https://scombz.shibaura-it.ac.jp/lms/course?")) {
    const $courseTitle = document.querySelector(".course-title-txt");
    if ($courseTitle && !document.getElementById("noticeSurvey")) {
      const $courseName = getCourseTitle();
      const link = document.createElement("link");
      link.href = chrome.runtime.getURL("css/class_survey_button.css"); // 新しいCSSファイルのパス
      link.type = "text/css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      ($courseTitle.parentNode as HTMLElement).insertAdjacentHTML(
        "beforeend",
        `
          <div class="noticeSurveyBox">
            <input class="ItemBox-CheckBox-Input" type="checkbox" id="noticeSurvey"></input>
            <label class="ItemBox-CheckBox-Label" for="noticeSurvey"></label>
            <span>この科目のアンケートを課題一覧に表示する</span>
          </div>`,
      );
      const pageUrl = location.href;
      const currentData = (await chrome.storage.local.get(defaultSaves)) as Saves;
      const notifySurveySubjects = currentData.settings.notifySurveySubjects;

      //chrome.storageに保存されたオンオフ情報を復元
      (document.getElementById("noticeSurvey") as HTMLInputElement).checked = notifySurveySubjects.some(
        (subject) => subject.name === $courseName,
      );
      //値の変更時にchrome.storageに保存する
      document.getElementById("noticeSurvey").addEventListener("change", () => {
        const filteredNotifySurveySubjects = notifySurveySubjects.filter((subject) => subject.name !== $courseName);
        if ((document.getElementById("noticeSurvey") as HTMLInputElement).checked) {
          filteredNotifySurveySubjects.push({ name: $courseName, url: pageUrl });
        }
        currentData.settings.notifySurveySubjects = filteredNotifySurveySubjects;

        chrome.storage.local.set(currentData);
      });
    }
  }
};

const modifyCoursePageTitle = () => {
  const courseTitle = document.querySelector(
    "#courseTopForm > div.course-header > div:nth-child(1) > div.course-title-txt.course-view-header-txt",
  );
  if (courseTitle) {
    // 科目名を取得する。
    const courseName = getCourseTitle();

    // 「科目名 - 科目トップ」のような表示にする
    document.title = `${courseName} - ${document.title}`;
  }
};

// URLをハイパーリンクに変換
const urlToLink = (): void => {
  const linkify = (node: Node): void => {
    const urlPattern: RegExp = /\bhttps?:\/\/[^\s]+\b/g;
    const textNodes: Node[] = [];

    // テキストノードのリストを作成
    const getTextNodes = (n: Node): void => {
      if (n.nodeType === Node.TEXT_NODE) {
        if (n.parentNode && n.parentNode.nodeName !== "A") {
          textNodes.push(n);
        }
      } else {
        n.childNodes.forEach(getTextNodes);
      }
    };

    getTextNodes(node);

    // テキストノード内のURLを<a>タグに置換
    textNodes.forEach((textNode: Node) => {
      const parent = textNode.parentNode;
      if (!parent) return;

      const text: string = textNode.nodeValue || "";
      let remainingText: string = text;
      let match: RegExpExecArray | null;
      let lastLastIndex: number = 0;

      while ((match = urlPattern.exec(remainingText))) {
        // マッチしたURLの前のテキストを追加
        parent.insertBefore(document.createTextNode(remainingText.slice(0, match.index)), textNode);

        // マッチしたURLを<a>タグに置換
        const anchor: HTMLAnchorElement = document.createElement("a");
        anchor.href = match[0];
        anchor.textContent = match[0];
        anchor.classList.add("utilities-anchor");
        anchor.target = "_blank";
        parent.insertBefore(anchor, textNode);

        lastLastIndex = urlPattern.lastIndex;
        remainingText = remainingText.slice(lastLastIndex);
      }

      if (lastLastIndex > 0) {
        // マッチしたURLの後のテキストを追加
        parent.insertBefore(document.createTextNode(remainingText), textNode);
        parent.removeChild(textNode);
      }
    });
  };

  let changed = false;

  const changeURL = (): void => {
    const ps: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("#courseTopForm p");
    if (ps.length > 0 && !changed) {
      const link = document.createElement("link");
      link.href = chrome.runtime.getURL("css/linkify.css"); // 新しいCSSファイルのパス
      link.type = "text/css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      ps.forEach((p) => {
        if (p.innerText.match(/\bhttps?:\/\/[^\s]+\b/g)) {
          changed = true;
          linkify(p);
        }
      });
    }
  };

  setTimeout(changeURL, 1200);
  window.addEventListener("focus", () => {
    setTimeout(changeURL, 800);
    setTimeout(changeURL, 2500);
  });
};

const loadNotepad = async () => {
  const pageUrl = new URL(window.location.href);
  const idNum = pageUrl.searchParams.get("idnumber");
  const currentData = (await chrome.storage.local.get(defaultSaves)) as Saves;
  const coursePageMemo = currentData.scombzData.coursePageMemo;
  const memo = coursePageMemo.find((memo) => memo.id === idNum)?.memo || "";
  const mdNotepadArea = document.getElementById("mdNotepadArea") as HTMLDivElement;
  mdNotepadArea.innerHTML = markdownit().render(memo);
};

const markdownNotePad = (): void => {
  if (!location.href.startsWith("https://scombz.shibaura-it.ac.jp/lms/course?")) return;

  // URLを取得
  const pageUrl = new URL(window.location.href);
  const idNum = pageUrl.searchParams.get("idnumber");

  const link = document.createElement("link");
  link.href = chrome.runtime.getURL("css/markdown_notepad.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  document.querySelector(".contents-title").insertAdjacentHTML(
    "beforebegin",
    `
  <div class="contents-title">
    <div class="contents-title-txt">
      <div class="course-view-title-txt" style="min-height:1em;">
        <span style="float:left;">メモ</span><span id="mdNotepadAdd"></span>
      </div>
      <div id="mdNotepadArea"></div>
    </div>
  </div>`,
  );
  loadNotepad();
  const mdNotepadArea = document.getElementById("mdNotepadArea") as HTMLDivElement;
  //クリックイベント
  document.getElementById("mdNotepadAdd").addEventListener("click", async () => {
    {
      const currentData = (await chrome.storage.local.get(defaultSaves)) as Saves;
      // 表示されているメモを削除
      while (mdNotepadArea.lastChild) {
        mdNotepadArea.removeChild(mdNotepadArea.lastChild);
      }
      // 入力欄を作成
      const mdNotepad = document.createElement("textarea");
      mdNotepad.id = "mdNotepadMd";
      mdNotepad.value = currentData.scombzData.coursePageMemo.find((memo) => memo.id === idNum)?.memo || "";
      mdNotepadArea.appendChild(mdNotepad);
      mdNotepadArea.insertAdjacentHTML(
        "beforeend",
        `
          <div class="md-exp">
            <a id="mdSaveButton" class="btn btn-inline btn-file-margin btn-txt btn-color">保存する</a>
            <a id="mdCancelButton" class="btn btn-inline btn-file-margin btn-txt btn-color">キャンセル</a>
          </div>`,
      );
    }

    // 保存
    document.getElementById("mdSaveButton").addEventListener("click", async () => {
      const currentData = (await chrome.storage.local.get(defaultSaves)) as Saves;
      const coursePageMemoArray = currentData.scombzData.coursePageMemo;
      const mdNotepad = document.getElementById("mdNotepadMd") as HTMLTextAreaElement;
      const coursePageMemo = coursePageMemoArray.find((memo) => memo.id === idNum);
      if (coursePageMemo) {
        coursePageMemo.memo = mdNotepad.value;
      } else {
        coursePageMemoArray.push({ id: idNum, memo: mdNotepad.value });
      }
      currentData.scombzData.coursePageMemo = coursePageMemoArray;
      chrome.storage.local.set(currentData);
      loadNotepad();
    });
    // キャンセル
    document.getElementById("mdCancelButton").addEventListener("click", () => {
      loadNotepad();
    });
  });
};

const splitByNumbers = (input: string): string[] => {
  // 半角・全角数字の直前で分割
  // 半角・全角アルファベットの前後で分割
  const pattern =
    /(?<=\D)(?=\d)|(?<=[^０-９])(?=[０-９])|(?<=[a-z|A-Z])(?=[ａ-ｚ|Ａ-Ｚ])|(?<=[ａ-ｚ|Ａ-Ｚ])(?=[a-z|A-Z])/;
  return input.split(pattern);
};

const createSyllabusButton = async () => {
  if (!location.href.startsWith("https://scombz.shibaura-it.ac.jp/lms/course?")) return;
  const currentData = (await chrome.storage.local.get(defaultSaves)) as Saves;
  const fac = currentData.settings.faculty;
  const insertArea =
    document.querySelector(".contents-question-template-area") || document.querySelector(".course-title-txt");
  if (!fac) {
    insertArea.insertAdjacentHTML(
      "afterend",
      `<span style="color:red;padding: 12px 30px 10px 34px">
        シラバス表示をするには
        <a href="javascript:void(0);" id="link_to_extention_syll">拡張機能設定</a>
        から学部を設定してください。</span>
    `,
    );
    document.getElementById("link_to_extention_syll")?.addEventListener("click", () => {
      chrome.runtime.sendMessage({ action: "openOption" } as RuntimeMessage);
    });
    return;
  }
  const rawCourseTitle = getCourseTitle().replace(/！-／：-＠［-｀｛-～、-〜”’・]+/g, " ");
  const courseTitle = splitByNumbers(rawCourseTitle).join(" ");
  const searchStr = courseTitle.includes(" ") ? courseTitle : `+subject:"${courseTitle}"`;
  const date = new Date();
  date.setMonth(date.getMonth() - 4);
  const urlParam = `ajaxmode=true&query=${toEscapedEUCJP(searchStr)}&whence=0&idxname=${date.getFullYear()}%2F${fac}&max=20&result=normal&sort=score&scombzutilities=true`;

  insertArea.insertAdjacentHTML(
    "afterend",
    `<a href="http://syllabus.sic.shibaura-it.ac.jp/namazu/namazu.cgi?${urlParam}"  target="_blank" rel="noopener noreferrer" class="btn btn-square btn-square-area btn-txt white-btn-color" style="margin-left:40px;margin-bottom:5px;">シラバスを表示</a>
    <span style="margin-left:35px;margin-bottom:10px;font-size:60%;">※自動検索で関連付けているため、違う教科のシラバスが開かれることがあります。</span>
    `,
  );
};

const course = async () => {
  const currentData = (await chrome.storage.local.get(defaultSaves)) as Saves;
  if (currentData.settings.layout.linkify) {
    urlToLink();
  }
  if (currentData.settings.modifyCoursePageTitle) {
    modifyCoursePageTitle();
  }
  if (currentData.settings.useTaskList) {
    insertSurveyBtnOnSubj();
  }
  if (currentData.settings.markdownNotePad) {
    markdownNotePad();
  }
  createSyllabusButton();
};

course();