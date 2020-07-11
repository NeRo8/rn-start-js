import apiData from "./static/api";
import { createConstIndex, createConstFile } from "./static/constants";
import { createTranslateFile, createTranslateIndex } from "./static/i18n";
import { createAuthStack, createNavigationIndex } from "./static/navigation";
import { createAuthScreen, createDefaultStyle } from "./static/screens";
import appData from "./static/index";

import { createFolder } from "./utils";
import installAllPackage from "./utils/installPackage";
import { generateReduxFolder } from "./static/redux";
import {
  createErrorBoundaryComponent,
  createErrorBoundaryStyles,
} from "./static/components";

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
    folder: "src/components/ErrorBoundary",
    files: [
      { name: "index", type: "js", data: createErrorBoundaryComponent() },
      { name: "styles", type: "js", data: createErrorBoundaryStyles() },
    ],
  },
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
      { name: "AuthStack", type: "js", data: createAuthStack() },
      { name: "index", type: "js", data: createNavigationIndex() },
    ],
  },
  { folder: "src/redux" },
  { folder: "src/redux/auth" },
  { folder: "src/redux/error" },
  { folder: "src/redux/themes" },
  { folder: "src/redux/themes/mode" },
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
  generateReduxFolder();

  installAllPackage();
}
