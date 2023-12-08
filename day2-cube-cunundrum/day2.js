import { match } from "node:assert";
import * as fs from "node:fs";
//https://adventofcode.com/2023/day/2 link to challenge
let sum = 0;
const bagContents = {
  red: 12,
  green: 13,
  blue: 14,
};
const rows = fs
  .readFileSync("./day2input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);

rows.forEach((row) => {
  const game = row.split(":");
  const gameNum = game[0].split(" ");
  const subsets = game[1].split(";");
  let tally = { subsets: [], [gameNum[0]]: gameNum[1] };
  let possibleGame = true;
  subsets.forEach((subset) => {
    let subsetsValues = {};
    const values = subset.split(",");
    values.forEach((val) => {
      const v = val.trim().split(" ");
      subsetsValues = { ...subsetsValues, [v[1]]: v[0] };
    });
    tally = { ...tally, subsets: [...tally.subsets, subsetsValues] };
    console.log("tally.subsets: ", tally.subsets);
    tally.subsets.every((set) => {
      for (var key in set) {
        if (bagContents[key] < parseInt(set[key])) {
          possibleGame = false;
          return false;
        }
      }
      return true;
    });
  });
  if (possibleGame === true) sum += parseInt(tally.Game);
});
console.log("sum: ", sum);
