import * as fs from "node:fs";
//https://adventofcode.com/2023/day/2 link to challenge
const bagContents = {
  red: 12,
  green: 13,
  blue: 14,
};
const rows = fs
  .readFileSync(__dirname + "/day2input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);

export const getGameSum = (rows) => {
  let sum = 0;
  let power = 0;
  rows.forEach((row) => {
    let amounts = { green: 0, red: 0, blue: 0 };
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
    });
    tally.subsets.forEach((set) => {
      for (var key in set) {
        if (bagContents[key] < parseInt(set[key])) {
          possibleGame = false;
        }
        if (amounts[key] < parseInt(set[key])) {
          amounts[key] = parseInt(set[key]);
        }
      }
      return true;
    });
    let gamePower = 1;
    Object.values(amounts).forEach((val) => {
      gamePower = gamePower * val;
    });
    //48, 12, 1560, 630, and 36
    power += gamePower;
    if (possibleGame) {
      sum += parseInt(tally.Game);
    }
  });
  return { power, sum };
};
const sum = getGameSum(rows).sum;
const power = getGameSum(rows).power;
console.log("sum: ", sum, " power:  ", power);
