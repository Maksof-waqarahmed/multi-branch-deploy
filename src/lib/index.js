const XLSX = require("xlsx");

function generateMockData(count = 10) {
  const data = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `Client ${i}`,
      revenue: Math.floor(Math.random() * 10000) + 1000,
      expense: Math.floor(Math.random() * 5000) + 500
    });
  }
  return data;
}

function calculateFinancials(data) {
  return data.map((item) => {
    const profit = item.revenue - item.expense;
    const tax = profit * 0.1; // 10% tax
    const netProfit = profit - tax;
    return { ...item, profit, tax, netProfit };
  });
}

function downloadExcel(data, filename = "FinancialReport.xlsx") {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Report");
  XLSX.writeFile(wb, filename);
}

function generateFinancialReport() {
  const mockData = generateMockData(15);
  const calculatedData = calculateFinancials(mockData);
  downloadExcel(calculatedData);
  return calculatedData;
}

module.exports = {
  generateMockData,
  calculateFinancials,
  downloadExcel,
  generateFinancialReport
};
