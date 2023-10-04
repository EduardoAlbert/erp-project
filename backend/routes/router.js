const express = require("express");
const routerApp = express.Router();

const appBanks = require("../apps/banks/controller/ctlBanks");

routerApp.get("/getAllBanks", appBanks.getAllBanks);

module.exports = routerApp;
