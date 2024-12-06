const express = require("express");
const accounts = require("../../accounts");

const router = express.Router();

const {
  listAccounts,
  createAccountController,
  editAccount,
  deleteAccount,
} = require("./controllers");

router.get("/", listAccounts);

router.post("/", createAccountController);

router.delete("/:accountId", deleteAccount);

router.put("/:accountId", editAccount);

module.exports = router;
