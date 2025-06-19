const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./routes");

const app = express();
const { PORT = 5000 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/voteData")
  .then(() => console.log("Connected to database."))
  .catch(console.error);

app.use(cors({ origin: "*" }));

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
