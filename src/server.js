const express = require("express");
const { generateFinancialReport } = require("./lib");

const app = express();

app.get("/", (req, res) => res.send(generateFinancialReport()));

app.listen(4000, () => console.log("Server running on port 4000"));
