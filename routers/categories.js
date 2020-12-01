const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Categories = require("../models").category;
const router = new Router();

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
