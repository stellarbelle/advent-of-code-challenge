import { match } from "node:assert";
import * as fs from "node:fs";
//first digit and the last digit (in that order) to form a single two-digit number
//https://adventofcode.com/2023/day/1 link to challenge
let sum = 0;
const textNums = {
  one: "1",
  two: "2",
  three: "3",
  four: "3",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
const input = fs
  .readFileSync("./day1input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);
input.forEach((item) => {
  const reg = /\d|(one|two|three|four|five|six|seven|eight|nine)/g;
  const matches = [];
  let found;
  while ((found = reg.exec(item))) {
    matches.push(found.index);
  }
  for (var key in textNums) {
    const firstIdx = item.indexOf(key);
    const lastIdx = item.lastIndexOf(key);
    if (firstIdx !== -1 && firstIdx < matches[0]) {
      matches.unshift(firstIdx);
    }
    if (lastIdx !== -1 && lastIdx > matches[matches.length - 1]) {
      matches.push(lastIdx);
    }
  }
  const firstMatch = item.substring(matches[0]).match(reg)[0];
  const lastMatch = item.substring(matches[matches.length - 1]).match(reg)[0];
  sum += parseInt(
    (textNums[firstMatch] || firstMatch) + (textNums[lastMatch] || lastMatch)
  );
  console.log(
    "item: ",
    item,
    " first: ",
    textNums[firstMatch] || firstMatch,
    " last: ",
    textNums[lastMatch] || lastMatch
  );
});
console.log("sum: ", sum);
