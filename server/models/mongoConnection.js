const MongoClient = require('mongodb').MongoClient;
const config = require('../utils/config');

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    throw new Error(err)
  } else {
    console.log("SERVER_LOG: Mongodb Connected")
  }
});

module.exports = client;
