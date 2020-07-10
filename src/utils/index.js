import { writeFileSync, mkdirSync, existsSync } from "fs";

import chalk from "chalk";

function createFile(name = "index", type = "js", data) {
  writeFileSync(`${name}.${type}`, data);
}

function createFolder(path, files = []) {
  if (existsSync(path, existsSync(path))) {
  } else {
    mkdirSync(path);
    console.log(path, chalk.yellow.bold("Folder created"));
    files.forEach((file) => {
      const { name = "index", type = "js", data = "" } = file;
      writeFileSync(path + "/" + `${name}.${type}`, data);
      console.log("\t", `${name}.${type}`, chalk.green.bold("Created"));
    });
  }
}

export { createFile, createFolder };
