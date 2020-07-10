import apiData from "./assets/api";
import { createConstIndex, createConstFile } from "./assets/constants";
import { createTranslateFile, createTranslateIndex } from "./assets/i18n";
import { createAuthStack, createNavigationIndex } from "./assets/navigation";
import { createAuthScreen, createDefaultStyle } from "./assets/screens";
import appData from "./assets/index";

import { createFolder } from "./utils";
import installAllPackage from "./utils/installPackage";

const foldersList = [
  {
    folder: "src",
    files: [
      {
        name: "index",
        type: "js",
        data: appData,
      },
    ],
  },
  {
    folder: "src/api",
    files: [{ name: "index", type: "js", data: apiData }],
  },
  { folder: "src/assets" },
  { folder: "src/assets/images" },
  { folder: "src/assets/fonts" },
  {
    folder: "src/constants",
    files: [
      {
        name: "images",
        type: "js",
        data: createConstFile("images"),
      },
      {
        name: "colors",
        type: "js",
        data: createConstFile("colors"),
      },
      { name: "svg", type: "js", data: createConstFile("svg") },
      { name: "fonts", type: "js", data: createConstFile("fonts") },
      { name: "index", type: "js", data: createConstIndex() },
    ],
  },
  { folder: "src/components" },
  {
    folder: "src/i18n",
    files: [{ name: "index", type: "js", data: createTranslateIndex() }],
  },
  {
    folder: "src/i18n/translation",
    files: [
      { name: "ru", type: "json", data: createTranslateFile() },
      { name: "en", type: "json", data: createTranslateFile() },
    ],
  },
  {
    folder: "src/navigation",
    files: [
      { name: "authStack", type: "js", data: createAuthStack() },
      { name: "index", type: "js", data: createNavigationIndex() },
    ],
  },
  { folder: "src/redux" },
  { folder: "src/screens" },
  { folder: "src/screens/Auth/" },
  {
    folder: "src/screens/Auth/Auth",
    files: [
      { name: "index", type: "js", data: createAuthScreen() },
      { name: "styles", type: "js", data: createDefaultStyle() },
    ],
  },
  { folder: "src/styles" },
  { folder: "src/utils" },
];

export function cli(args) {
  foldersList.forEach((item) => {
    createFolder(item.folder, item.files);
  });
  installAllPackage();
}
