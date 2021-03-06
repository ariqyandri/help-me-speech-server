const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"];

    const token = toJWT({ userId: user.id });

    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);

    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, image, password } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).send({
      message: "Please provide an email, password and both first and last name",
    });
  }
  const userEmail = await User.findOne({ where: { email: email } });
  if (userEmail) {
    return res.status(400).send({ message: "User with email already exists" });
  }
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      image: image
        ? image
        : "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg",
      password: bcrypt.hashSync(password, SALT_ROUNDS),
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  delete req.user.dataValues["password"];

  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
