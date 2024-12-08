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
  if (foundAccount) {
    console.log("found Account");
    await foundAccount.updateOne(newData);
  }
};
exports.editAccount = async (req, res) => {
  const { accountId } = req.params;
  const newData = req.body;
  const foundAccount = await Account.findById(accountId);
  if (foundAccount) {
    updateAccount(accountId, newData);
    res.status(201).json();
  }
  res.status(404).json();
};

const deleteAccountById = async (accountIdToBeDeleted) => {
  const targetAccount = await Account.findById(accountIdToBeDeleted);
  const tester = await targetAccount.deleteOne();
};
exports.deleteAccount = async (req, res) => {
  const { accountId } = req.params;
  const targetAccount = await Account.findById(accountId);
  if (targetAccount) {
    console.log("target aquired");
    deleteAccountById(accountId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
};
