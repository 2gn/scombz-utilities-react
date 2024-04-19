import type { PlasmoCSConfig } from "plasmo";
import { layoutHome } from "./util/layout";

export const config: PlasmoCSConfig = {
  matches: ["https://scombz.shibaura-it.ac.jp/portal/home"],
  run_at: "document_start",
};

document.addEventListener("DOMContentLoaded", async () => {
  layoutHome();
});
