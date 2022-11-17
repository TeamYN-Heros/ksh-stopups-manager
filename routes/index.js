const express = require("express");
const kshAdmins = require("../models/kshAdmins");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const admins = await kshAdmins.findAll();
    res.render("managerLogin", { admins });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/register", async (req, res, next) => {
  try {
    const admins = await kshAdmins.findAll();
    res.render("managerRegister", { admins });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/home", async (req, res, next) => {
  try {
    const admins = await kshAdmins.findAll();
    res.render("managerHome", { admins });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
