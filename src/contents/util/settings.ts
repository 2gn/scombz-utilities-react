/* Settings */
export type Settings = {
  clickLogin: boolean;
  loginData: {
    username: string;
    password: string;
  };
  autoAdfs: boolean;
  hideSideMenu: boolean;
  styleSideMenu: boolean;
};
export const defaultSettings: Settings = {
  clickLogin: true,
  loginData: {
    username: "",
    password: "",
  },
  autoAdfs: true,
  hideSideMenu: true,
  styleSideMenu: true,
};

/* ScombzData */
export type ScombzData = {
  beforeLoginOshirase: string;
};
export const defaultScombzData: ScombzData = {
  beforeLoginOshirase: "",
};

/* Saves */
export type Saves = {
  settings: Settings;
};
export const defaultSaves = {
  settings: defaultSettings,
  scombzData: defaultScombzData,
};
