import { firstLastIntSum } from "./day2";
test("creates num from each first and last occurance and adds num from each item together", () => {
  expect(
    firstLastIntSum(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
  ).toBe(142);
  expect(
    firstLastIntSum([
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ])
  ).toBe(281);
});
