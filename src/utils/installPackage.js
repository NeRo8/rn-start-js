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

export default function installAllPackage() {
  packageList.forEach((item) => {
    var exec = require("child_process").exec,
      child;

    child = exec(`npm install --save ${item}`).stderr.pipe(process.stderr);
  });
}
