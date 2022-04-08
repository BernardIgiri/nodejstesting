import fs from "fs/promises";
import path from "path";
import { Buffer } from "buffer";

const filesArgument = process.argv.slice(2);
const readFileFromDisk = async path => fs.readFile(path, "utf8");

const isNum = v => v.length && !isNaN(v);

const sumNumbers = async (files, readFile) => {
  let sum = 0;
  await Promise.all(
    files.map(async f => {
      const contents = await readFile(f);
      sum += contents
        .split(/\s+/g)
        .reduce((s, v) => (
          isNum(v) ? s + (parseInt(v, 10)) : s
        ), 0)
      return sum;
    })
  );
  return sum;
}

if (filesArgument.length) {
  let sum = await sumNumbers(filesArgument, readFileFromDisk);
  console.log(`The sum is ${sum}`);
}

export default sumNumbers;
