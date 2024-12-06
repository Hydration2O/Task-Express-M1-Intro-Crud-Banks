const accounts = require("../../accounts");
const Account = require("../../models/Account");

exports.listAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.status(200).json(accounts);
};

const createAccount = async (newAccountData) => {
  console.log("makeing new Account:", newAccountData);
  const newAccount = await Account.create(newAccountData);
  return newAccount;
};

exports.createAccountController = (req, res) => {
  const newAccount = createAccount(req.body);
  res.status(201).json(newAccount);
};

const updateAccount = async (targetAccountId, newData) => {
  const foundAccount = await Account.findById(targetAccountId);
  console.log("passed line 1");
  if (foundAccount) {
    console.log("found Account");
    // const updatedAccount= foundAccount.updateOne(newData);
    foundAccount.updateOne(newData);
  }
};
exports.editAccount = (req, res) => {
  const { accountId } = req.params;
  const { newData } = req.body;
  updateAccount(accountId, newData);
  res.status(200).json();
};

const deleteAccountById = (accountIdToBeDeleted) => {};
exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id === Number(accountId));
  if (account) {
    deleteAccountById(account.id);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
};
