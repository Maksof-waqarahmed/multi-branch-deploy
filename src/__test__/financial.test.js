const { generateFinancialReport } = require("../lib");

test("Financial report should contain correct fields", () => {
  const result = generateFinancialReport();

  expect(result.length).toBeGreaterThan(0);
  expect(result[0]).toHaveProperty("profit");
  expect(result[0]).toHaveProperty("tax");
  expect(result[0]).toHaveProperty("netProfit");
});