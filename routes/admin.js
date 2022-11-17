const express = require("express");
const kshAdmins = require("../models/kshAdmins");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const admins = await kshAdmins.findAll();
      res.json(admins);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const admin = await kshAdmins.create({
        adminId: req.body.adminId,
        adminPw: req.body.adminPw,
        adminToken: req.body.adminToken,
        adminName: req.body.adminName,
      });
      console.log(admin);
      res.status(201).json(admin);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get("/:id/comments", async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: {
        model: kshAdmins,
        where: { id: req.params.id },
      },
    });
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
