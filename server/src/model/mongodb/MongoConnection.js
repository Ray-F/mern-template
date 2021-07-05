import { MongoClient } from 'mongodb';
import Config from '../../util/Config';

const client = new MongoClient(Config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('[Server] MongoDB connected');
  }
});

module.exports = client;
