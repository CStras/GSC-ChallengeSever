const Vote = require("./model");

const getVotes = (req, res, next) => {
  Vote.find({})
    .then((items) => {
      res.send(items);
    })
    .catch(next);
};

module.exports = { getVotes };
