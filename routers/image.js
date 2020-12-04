const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Image = require("../models/").image;
const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const newImage = await Image.create({
      ...req.body,
    });
    res.status(200).send(newImage);
  } catch (error) {
    next(error);
  }
});

router.put("/:writingId", authMiddleware, async (req, res, next) => {
  try {
    const newImage = await Image.update(
      {
        writingId: parseInt(req.params.writingId),
      },
      { where: { ...req.body }, returning: true }
    );
    res.status(200).send("success");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    await Image.destroy({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).send("success");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
