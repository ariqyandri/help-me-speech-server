const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Writing = require("../models/").writing;
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const myWritings = await Writing.findAll({
      where: { userId: req.user.dataValues["id"] },
    });
    console.log();
    res.status(200).send(myWritings);
  } catch (error) {
    next(error);
  }
});

router.get("/:category", authMiddleware, async (req, res, next) => {
  try {
    const myWritings = await Writing.findAll({
      where: {
        categoryId: req.body.categoryId,
        userId: req.user.dataValues["id"],
      },
    });
    console.log();
    res.status(200).send(myWritings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
