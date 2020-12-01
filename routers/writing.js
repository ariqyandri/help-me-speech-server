const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Writing = require("../models/").writing;
const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const newWriting = await Writing.create({
      ...req.body,
      userId: req.user.dataValues["id"],
    });
    console.log(req.body);
    res.status(200).send(newWriting);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
