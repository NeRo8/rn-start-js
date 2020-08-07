import chalk from "chalk";

const packageList = [
  "redux",
  "react-redux",
  "axios",
  "i18n-js",
  "lodash.memoize",
  "react-native-extended-stylesheet",
  "react-native-gesture-handler",
  "react-native-reanimated",
  "react-native-safe-area-context",
  "react-native-screens",
  "react-native-svg",
  "react-native-svg-transformer",
  "@react-native-community/masked-view",
  "@react-navigation/native",
  "@react-navigation/stack",
];

const tsPackageList = [
  "typescript",
  "@types/jest",
  "@types/react",
  "@types/react-native",
  "@types/react-test-renderer",
];

function execShellCommand(cmd) {
  const exec = require("child_process").exec;

  console.log(chalk.yellow(`{cmd} installation process has started`));
  exec(`npm install --save ${cmd}`, (error, stdout, stderr) => {
    if (error) {
      console.log(chalk.red("Error:", error));
    }

    stdout
      ? console.log(chalk.green(`Success install package`, stdout))
      : console.log(chalk.green(`Error  install package`, stderr));
  });
}

export function installAllTsPackage() {
  console.log(chalk.yellow("\nPlease wait, we install dependencies\n"));
  const packageL = packageList.concat(tsPackageList);
  packageL.forEach((item) => {
    execShellCommand(item);
  });
}

export default function installAllJsPackage() {
  console.log(chalk.yellow("\nPlease wait, we install dependencies\n"));

  packageList.forEach((item) => {
    execShellCommand(item);
  });
}
