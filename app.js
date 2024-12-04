const express = require("express");
const accounts = require("./accounts");
const app = express();
const port = 8000;

const deleteAccountById = (accountIdToBeDeleted) => {
  const newAccountArray = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
  console.log("My new account list are: ", newAccountArray);
};

const updateAccount = (currentAccount, newData) => {
  const editedAccount = Object.assign(currentAccount, newData);
  return editedAccount;
};

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

app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id === Number(accountId));
  if (account) {
    deleteAccountById(account.id);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
});

app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id === Number(accountId));
  if (account) {
    const updatedAccount = updateAccount(account, req.body);
    deleteAccountById(account.id);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).json();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
