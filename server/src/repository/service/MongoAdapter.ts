import { Db, MongoClient } from 'mongodb';
import { logger } from '../../util/Logger';

/**
 * A singleton adapter that allows access to MongoDB cluster through a unique mongo uri.
 */
class MongoAdapter {
  /**
   * The database instance.
   */
  public db: Db;

  /**
   * Private MongoClient for purposes of getting another database from the same adapter instance.
   */
  private client: MongoClient;

  private static _instance: MongoAdapter;

  private constructor(uri: string, dbName: string) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    client.connect((err) => {
      if (err) throw err;
      this.db = client.db(dbName);
      logger.logInfo('MongoDB connected');
    });

    this.client = client;
  }

  public getDb(dbName: string): Db {
    return this.client.db(dbName);
  }

  /**
   * Builds a MongoAdapter using a `uri` and default `dbName`.
   */
  public static build(uri: string, dbName: string): MongoAdapter {
    if (this._instance) throw new Error('MongoAdapter already built!');

    this._instance = new this(uri, dbName);
    return this._instance;
  }

  /**
   * Get the current `MongoAdapter` instance if it exists, or
   */
  public static getInstance(): MongoAdapter {
    if (!this._instance) throw new Error('No instance of MongoAdapter exists!');
    return this._instance;
  }
}

export { MongoAdapter };
