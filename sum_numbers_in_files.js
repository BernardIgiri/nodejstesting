import fs from "fs/promises";
import path from "path";
import { Buffer } from "buffer";

const filesArgument = process.argv.slice(2);

const isNum = v => v.length;

const sumNumbers = async files => {
  let sum = 0;
  await Promise.all(
    files.map(async f => {
      const contents = await fs.readFile(f, "utf8");
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
  let sum = await sumNumbers(filesArgument);
  console.log(`The sum is ${sum}`);
}

export default sumNumbers;
