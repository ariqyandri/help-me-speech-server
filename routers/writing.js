const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Writing = require("../models/").writing;
const User = require("../models/").user;
const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const newWriting = await Writing.create({
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
      videoUrl: req.body.videoUrl,
      categoryId: req.body.categoryId,
      userId: req.user.dataValues["id"],
    });
    res.status(200).send(newWriting);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const writings = await Writing.findAll();
    res.status(200).send(writings);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
