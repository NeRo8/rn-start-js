import installAllPackage from "./utils/installPackage";

// include fs-extra package
var path = require("path");
var fs = require("fs-extra");

var source = path.join(__dirname, "/static");
var destination = process.cwd() + "/src";

export function cli(args) {
  fs.copy(source, destination, function (err) {
    if (err) {
      console.log("An error occured while copying the folder.");
      return console.error(err);
    }
  });

  installAllPackage();
}
