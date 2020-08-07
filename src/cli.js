import installAllJsPackage, {
  installAllTsPackage,
} from "./utils/installPackage";

var path = require("path");
var fs = require("fs-extra");

var sourceJS = path.join(__dirname, "/static/js");

var sourceTS = path.join(__dirname, "/static/ts");
var sourceTsConfigFiles = path.join(__dirname, "static/configFiles");

var destination = process.cwd() + "/src";
var destinationTsConfig = process.cwd();

function installJs() {
  fs.copy(sourceJS, destination, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });

  installAllJsPackage();
}

function installTs() {
  fs.copy(sourceTS, destination, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });

  fs.copy(sourceTsConfigFiles, destinationTsConfig, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });

  installAllTsPackage();
}

export function cli(args) {
  if (args[2] === "ts") {
    installTs();
  } else {
    installJs();
  }
}
