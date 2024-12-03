const express = require("express");
const accounts = require("./accounts");
const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const newId = accounts.length + 1;
  const newAccount = Object.assign(req.body, { id: newId });
  const defaultFunds = 0;
  if (!(req.body.funds in newAccount)) {
    Object.assign(req.body, defaultFunds);
  }
  accounts.push(req.body);
  res.json(accounts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
