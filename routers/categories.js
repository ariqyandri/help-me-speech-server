const { Router } = require("express");
const Categories = require("../models").category;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
