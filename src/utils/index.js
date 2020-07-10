import { writeFileSync, mkdirSync, existsSync } from "fs";

//const colors = require("chalk");

function createFile(name = "index", type = "js", data) {
  writeFileSync(`${name}.${type}`, data);
}

function createFolder(path, files = []) {
  if (existsSync(path, existsSync(path))) {
  } else {
    //console.log(path, colors.green.bold("Created"));
    mkdirSync(path);
    files.forEach((file) => {
      const { name = "index", type = "js", data = "" } = file;
      writeFileSync(path + "/" + `${name}.${type}`, data);
      //console.log(path, colors.green.bold("Created"));
    });
  }
}

export { createFile, createFolder };
