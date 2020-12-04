require("dotenv").config();
module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgres",
  },
  test: {},
  production: {
    url:
      "postgres://qdxtfgin:DhCL15nCEQ03vcXxhOmuDlv5IJeisuAG@hattie.db.elephantsql.com:5432/qdxtfgin",
  },
};
