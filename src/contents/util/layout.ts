export const layoutHome = () => {
  "use strict";
  if (location.href.includes("https://scombz.shibaura-it.ac.jp/portal/home")) {
    console.log("homeを検知しました");
    document.head.insertAdjacentHTML("beforeend", `
        <style>
        @media screen and (min-width: 1800px){
            .portal-link-list-li{
                min-width:440px;
            }
        }
        .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain{
            transition:opacity 150ms;
        }
        .downloadFile.roo.portal-banner-list-li-img.portal-banner-img.portal-banner-img-contain:hover{
            opacity:0.6;
        }
        .portal-left {
            width: calc(100% - 310px);
            padding: 0 24px 35px 20px;
            float: left;
        }
        @media screen and (max-width: 970px) {
            .portal-left {
                width: 100%;
            }
        }
        @media screen and (min-width: 971px) {
            .portal-right {
                /* background-color: #E2E7E8; */
                padding: 0 34px 35px 24px;
                position: absolute;
                right: 11px;
                top: 96px;
                width: 310px;
                list-style: none;
                padding: 0;
            }
        }
        @media screen and (min-width:1280px){
            .portal-left{
                max-width: 950px;
                float:none !important;
                margin-left: calc(50vw - 650px);
            }
            .portal-right{
                right: calc(50vw - 625px);
            }
        }
        #top_links{
            overflow: visible;
        }
        </style>
        `);
    //リンクをすべて表示する
    const $school_link_list = document.getElementById('school_link_list');
    if ($school_link_list) {
      setTimeout(() => {
        ($school_link_list.querySelector(".portal-link-bottom a") as HTMLElement).click();
      }, 300);
    }
    //学年歴ボタンを作る
    const $exportGoogleBtn = document.querySelector(".portal-calendar-event-export.calendar_ics_download");
    if ($exportGoogleBtn) {
      $exportGoogleBtn.insertAdjacentHTML(
        "afterend",
        `<a 
              class="portal-calendar-event-add-a"
              href="https://www.shibaura-it.ac.jp/campus_life/school_calendar/"
              target="_blank"
              rel="noopener noreferrer"
              style="border-top: 1px dotted #FFF;"
            >学年歴を見る</a>`
      );
    }
    //カレンダーの下にリンク集を追加する
    const $top_attention = document.getElementById("top_attention");
    if ($top_attention) {
      console.log("注目コンテンツを取得しました");
      $top_attention.insertAdjacentHTML("beforebegin", `
            <dl id="right-links" class="portal-subblock portal-subblock-dl-initial">
                        <dt class="portal-top-subblock-title portal-subblock-title portal-notice-title">
                          重要リンク
                        </dt>
                        <dd class="portal-subblock-link">
                            <div>
                                <a
                                  class="portal-subblock-link-main-a"
                                  href="https://ami.sic.shibaura-it.ac.jp/"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                AMI</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a
                                  class="portal-subblock-link-main-a"
                                  href="http://sgsot.sic.shibaura-it.ac.jp/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >S*gsot</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a
                                  class="portal-subblock-link-main-a"
                                  href="https://supereigo2.sic.shibaura-it.ac.jp/sso/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >新スーパー英語</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a
                                  class="portal-subblock-link-main-a"
                                  href="https://scomb.shibaura-it.ac.jp/portal/dologin"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >旧Scomb</a>
                            </div>
                        </dd>
                        <dd class="portal-subblock-link">
                            <div>
                                <a
                                  style="color: #231815;text-decoration: none;"
                                  href="#school_link_list">もっと見る
                                </a>
                            </div>
                        </dd>
                            
                        
                    </dl>
            `);
    }
  };
  return;
};
