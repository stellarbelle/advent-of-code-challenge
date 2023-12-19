import * as fs from "node:fs";
//https://adventofcode.com/2023/day/5 link to challenge

const data = fs
  .readFileSync("./day5testinput.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);

// console.log("data: ", data);

export const getSeedMap = (rows) => {
  let seedMap = {};
  let key;
  rows.forEach((row) => {
    const entry = row.trim();
    if (entry.length) {
      if (entry.includes(":")) {
        const values = entry.split(":");
        key = values[0].split(" ")[0];
        seedMap[key] = values[1].length ? values[1].trim().split(" ") : [];
      } else {
        const value = entry.split(" ");
        seedMap[key].push(value);
      }
      console.log("seedMap: ", seedMap);
    }
  });
  return seedMap;
};
const seedMap = getSeedMap(data);

// console.log("seedMap: ", seedMap);
