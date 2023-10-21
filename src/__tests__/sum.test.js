import sum from "../components/sum";

test("sum function should return sum", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
