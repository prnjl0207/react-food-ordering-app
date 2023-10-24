import sum from "../components/sum.js";

test("sum function should return sum of two nimbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
