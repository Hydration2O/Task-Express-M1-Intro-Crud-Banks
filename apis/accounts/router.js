const express = require("express");
const accounts = require("../../accounts");

const router = express.Router();

const {
  listAccounts,
  createAccount,
  editAccount,
  deleteAccount,
} = require("./controllers");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/", listAccounts);

router.post("/", createAccount);

router.delete("/:accountId", deleteAccount);

router.put("/:accountId", editAccount);

module.exports = router;
