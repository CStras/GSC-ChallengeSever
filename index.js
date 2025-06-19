const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const votes = {};

app.post("/api/vote", (req, res) => {
  const { subject } = req.body;

  if (!subject) return res.status(400).send("No subject provided");
  votes[subject] = (votes[subject] || 0) + 1;

  return res.status(200).send("Vote counted");
});

app.get("/api/results", (req, res) => {
  res.json(votes);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
