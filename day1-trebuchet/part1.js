import * as fs from "node:fs";
//first digit and the last digit (in that order) to form a single two-digit number
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
  const numbers = item.match(
    /\d+|(one|two|three|four|five|six|seven|eight|nine)/g
  );
  const first = parseInt(numbers[0])
    ? numbers[0].split("")[0]
    : textNums[numbers[0]];
  const last = parseInt(numbers.at(-1))
    ? numbers.at(-1).split("").at(-1)
    : textNums[numbers.at(-1)];
  sum += parseInt(first + last);
});
console.log("sum: ", sum);
