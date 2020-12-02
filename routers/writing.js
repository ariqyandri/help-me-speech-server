const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Writing = require("../models/").writing;
const User = require("../models/").user;
const Category = require("../models/").category;
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

router.put("/:id", authMiddleware, async (req, res, next) => {
  try {
    const updatedWriting = await Writing.update(
      { ...req.body },
      {
        where: { id: parseInt(req.params.id) },
        returning: true,
      }
    );
    res.status(200).send(updatedWriting["1"][0]);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const myWriting = await Writing.findByPk(parseInt(req.params.id), {
      include: [
        { model: User, attributes: ["firstName", "lastName"] },
        { model: Category, attributes: ["name"] },
      ],
    });
    res.status(200).send(myWriting);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
