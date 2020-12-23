const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Writing = require("../models/").writing;
const Category = require("../models/").category;
const User = require("../models/").user;
const router = new Router();

router.get("/mywritings", authMiddleware, async (req, res, next) => {
  try {
    const myWritings = await Writing.findAll({
      where: { userId: req.user.dataValues["id"] },
      include: [
        { model: User, attributes: ["firstName", "lastName"] },
        { model: Category, attributes: ["name"] },
      ],
    });
    res.status(200).send(myWritings);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/mywritings/category/:categoryId",
  authMiddleware,
  async (req, res, next) => {
    try {
      const myWritings = await Writing.findAll({
        where: {
          categoryId: req.params.categoryId,
          userId: req.user.dataValues["id"],
        },
        include: [
          { model: User, attributes: ["firstName", "lastName"] },
          { model: Category, attributes: ["name"] },
        ],
      });
      if (!myWritings) {
        res.status(200).send([]);
      }
      res.status(200).send(myWritings);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const writings = await Writing.findAll({
      where: { isPrivate: false },
      include: [
        { model: User, attributes: ["firstName", "lastName"] },
        { model: Category, attributes: ["name"] },
      ],
    });
    res.status(200).send(writings);
  } catch (error) {
    next(error);
  }
});

router.get("/category/:categoryId", async (req, res, next) => {
  try {
    const myWritings = await Writing.findAll({
      where: {
        categoryId: req.params.categoryId,
        isPrivate: false,
      },
      include: [
        { model: User, attributes: ["firstName", "lastName"] },
        { model: Category, attributes: ["name"] },
      ],
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
