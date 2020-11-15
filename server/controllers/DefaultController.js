// use if requiring a mongo connection
// const mongoClient = require('../models/mongoConnection');

const helloWorld = async (req, res, next) => {
  res.send("Hello, world!");
}

module.exports = {
  helloWorld
}
