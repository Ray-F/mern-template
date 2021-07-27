import { BaseController } from './BaseController';
import { Request, Response } from 'express';
import { MongoAdapter } from '../../repository/service/MongoAdapter';

// Mongo service for connecting to the database
const mongoService = MongoAdapter.getInstance();

class DefaultController extends BaseController {
  /**
   * Default landing page for non implemented /api route.
   */
  async api404(req: Request, res: Response) {
    res.send(`
      <h2>MERN-Template Express API</h2>
      <p>
      This route has not yet been implemented, and you have reached the default
      landing page for the <code>/api</code> endpoint. 
      <br />
      The template this application extends from can be found on GitHub 
      <a href="https://www.github.com/ray-f/mern-template">here</a>.
      </p>
    `);
  }
}

export { DefaultController };
