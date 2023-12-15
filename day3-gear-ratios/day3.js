import * as fs from "node:fs";
//https://adventofcode.com/2023/day/3 link to challenge

// const data = fs
//   .readFileSync("./day3input.txt", {
//     encoding: "utf8",
//     flag: "r",
//   })
//   .split(/\r?\n/);

const data = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];
const symbols = [];
const numbers = [];
export const getEngineSchematicSum = (rows) => {
  let sum = 0;
  rows.forEach((row) => {
    const symbolMatch = [...row.matchAll(/([^\d\.])/g)];
    if (symbolMatch.length === 0) symbols.push([]);
    else symbols.push(symbolMatch.map((o) => o.index));

    const numberMatch = [...row.matchAll(/(\d+)/g)];
    console.log("row: ", row);
    if (numberMatch.length === 0) numbers.push([]);
    else
      numbers.push(
        numberMatch.map((obj) => {
          return {
            index: obj.index,
            number: parseInt(obj[0]),
            length: obj[0].length,
          };
        })
      );
  });
  const partNumbersSum = numbers.reduce((acc, numArr, i) => {
    console.log("numArr: ", numArr);
    console.log("symbols: ", symbols);
    console.log("idx: ", i);
    let rowAcc = numArr.reduce((racc, numObj) => {
      const { index, number, length } = numObj;
      const currRowSymbolIndicies = symbols[i];
      console.log("currRowSymbolIndicies: ", currRowSymbolIndicies);
      const upperRowSymbolIndicies = symbols[i - 1] || [];
      const lowerRowSymbolIndicies = symbols[i + 1] || [];
      let isPartNumber = false;
      for (let j = 0; j < length; j++) {
        const digitIndex = index + j;
        if (
          [digitIndex - 1, digitIndex + 1].some((ni) =>
            currRowSymbolIndicies.includes(ni)
          ) ||
          [digitIndex, digitIndex - 1, digitIndex + 1].some((ni) =>
            upperRowSymbolIndicies.includes(ni)
          ) ||
          [digitIndex, digitIndex - 1, digitIndex + 1].some((ni) =>
            lowerRowSymbolIndicies.includes(ni)
          )
        ) {
          isPartNumber = true;
        }
      }
      return isPartNumber ? racc + number : racc;
    }, 0);
    return acc + rowAcc;
  }, 0);
  console.log(partNumbersSum);
  return sum;
};
const sum = getEngineSchematicSum(data);
console.log("sum: ", sum);
