const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Writing = require("../models/").writing;
const Category = require("../models/").category;
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const myWritings = await Writing.findAll({
      where: { userId: req.user.dataValues["id"] },
      include: { model: Category, attributes: ["name"] },
    });
    console.log();
    res.status(200).send(myWritings);
  } catch (error) {
    next(error);
  }
});

router.get("/:category/:categoryId", authMiddleware, async (req, res, next) => {
  try {
    const myWritings = await Writing.findAll({
      where: {
        categoryId: req.params.categoryId,
        userId: req.user.dataValues["id"],
      },
      include: { model: Category, attributes: ["name"] },
    });
    if (!myWritings) {
      res.status(200).send([]);
    }
    res.status(200).send(myWritings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
