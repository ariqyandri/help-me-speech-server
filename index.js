const express = require("express");
const { PORT } = require("./config/constants");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const writingRouter = require("./routers/writing");

const app = express();
const bodyParserMiddleWare = express.json();

app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

app.use("/", authRouter);

app.use("/writings", writingRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port:`, PORT);
});
