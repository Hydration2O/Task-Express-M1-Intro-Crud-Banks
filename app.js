const express = require("express");
const accounts = require("./accounts");
const connectDb = require("./database");
const accountRouter = require("./apis/accounts/router");
const { default: mongoose } = require("mongoose");

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/accounts", accountRouter);

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
