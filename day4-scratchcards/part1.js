import * as fs from "node:fs";
//https://adventofcode.com/2023/day/4 link to challenge

const data = fs
  .readFileSync(__dirname + "/day4input.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split(/\r?\n/);

const testData = [
  "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
  "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
  "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
  "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
  "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
  "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
];

export const getTotalPoints = (rows) => {
  let totalPoints = 0;
  rows.forEach((row) => {
    let points = 0;
    const numbers = row.split(":")[1].split("|");
    const winningNumbers = numbers[0].trim().split(" ");
    const myNumbers = numbers[1].trim().split(" ");
    myNumbers.forEach((num) => {
      if (num.length && winningNumbers.includes(num)) {
        points = points === 0 ? 1 : points * 2;
      }
    });
    totalPoints += points;
  });
  return totalPoints;
};
const totalPoints = getTotalPoints(data);

console.log("totalPoints: ", totalPoints);
