import { BaseController } from './BaseController';

class DefaultController extends BaseController {

  /**
   * Default landing page for non implemented /api routes.
   */
  async api404(req, res) {
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


export {
  DefaultController,
};
