require("dotenv").config();
module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgres",
  },
  test: {},
  production: { url: process.env.ELEPHANT_SQL, dialect: "postgres" },
};
