const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const router = new Router();

router.put("/", authMiddleware, async (req, res, next) => {
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

module.exports = router;
