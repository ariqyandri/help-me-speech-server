const express = require("express");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");

const app = express();
const bodyParserMiddleWare = express.json();

app.use(bodyParserMiddleWare);

app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port:`, PORT);
});
