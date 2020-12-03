const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Image = require("../models/").image;
const router = new Router();

router.post("/:writingId", authMiddleware, async (req, res, next) => {
  try {
    const newImage = await Image.create({
      ...req.body,
      writingId: req.user.dataValues["id"],
    });
    res.status(200).send(newImage);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
