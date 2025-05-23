import { updateBadgeText } from "./backgrounds/badge";
import { getJson } from "./backgrounds/getJson";
import { getClasses, logoutGoogle } from "./backgrounds/google";
import { onInstalled } from "./backgrounds/onInstalled";

export type RuntimeMessage = {
  action:
    | "openOption"
    | "updateBadgeText"
    | "openNewTabInBackground"
    | "getJson"
    | "openNewTab"
    | "clearCache"
    | "getClasses"
    | "logoutGoogle";
  url?: string;
};

chrome.runtime.onMessage.addListener((message: RuntimeMessage, _sender, sendResponse) => {
  switch (message.action) {
    case "getClasses":
      if (process.env.PLASMO_BROWSER === "chrome") {
        getClasses(sendResponse);
      }
      break;
    case "logoutGoogle":
      logoutGoogle();
      break;
    case "openOption":
      chrome.runtime.openOptionsPage();
      break;
    case "openNewTabInBackground":
      chrome.tabs.create({ url: message.url, active: false });
      break;
    case "openNewTab":
      chrome.tabs.create({ url: message.url, active: true });
      break;
    case "updateBadgeText":
      updateBadgeText();
      break;
    case "getJson":
      getJson(message, sendResponse);
      break;
    case "clearCache":
      chrome.browsingData.removeCache(
        {
          since: 0,
        },
        () => {
          sendResponse("全てのキャッシュをクリアしました。");
        },
      );
    default:
      break;
  }
  return true;
});

//インストール時
chrome.runtime.onInstalled.addListener(({ reason }) => {
  updateBadgeText();
  onInstalled(reason);
});

//  起動時
chrome.runtime.onStartup.addListener(() => {
  updateBadgeText();
});
