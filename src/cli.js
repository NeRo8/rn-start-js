import installAllJsPackage from "./utils/installPackage";

var path = require("path");
var fs = require("fs-extra");

var sourceJS = path.join(__dirname, "/static/js");
var sourceTS = path.join(__dirname, "/static/ts");
var destination = process.cwd() + "/src";

function installJs() {
  fs.copy(source, destination, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });

  // installAllJsPackage();
}

function installTs() {
  fs.copy(source, destination, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });
}

export function cli(args) {
  if (args[2] === "ts") {
    installTs();
  } else {
    installJs();
  }
}
