/*
 * Use if requiring a mongodb connection.
 * import mongo from '../models/mongodb/MongoConnection';
 */

const helloWorld = async (req, res, next) => {
  res.send('Hello, world!');
};

export default {
  helloWorld,
};
