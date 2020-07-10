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

function execShellCommand(cmd) {
  const exec = require("child_process").exec;

  console.log(chalk.yellow(`Command ${cmd} is running`));
  exec(`npm install --save ${cmd}`, (error, stdout, stderr) => {
    if (error) {
      console.log(chalk.red("Error:", error));
    }

    stdout
      ? console.log(chalk.green(`Success install package`, stdout))
      : console.log(chalk.green(`Error  install package`, stderr));
  });
}

export default function installAllPackage() {
  console.log(chalk.yellow("\nPlease wait, we install the packages\n"));
  packageList.forEach((item) => {
    execShellCommand(item);
  });
}
