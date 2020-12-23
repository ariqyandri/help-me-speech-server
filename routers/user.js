const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const router = new Router();

router.put("/", authMiddleware, async (req, res, next) => {
  if (req.body.email) {
    const userEmail = await User.findOne({ where: { email: email } });
    if (userEmail) {
      return res
        .status(400)
        .send({ message: "User with email already exists" });
    }
  }
  try {
    await User.update(
      {
        ...req.body,
      },
      { where: { id: req.user.dataValues["id"] } }
    );
    const updatedUser = await User.findByPk(req.user.dataValues["id"], {
      attributes: { exclude: ["password"] },
    });
    res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(parseInt(req.params.id), {
      attributes: { exclude: ["password"] },
    });
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
