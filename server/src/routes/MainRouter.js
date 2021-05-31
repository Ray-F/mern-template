import { Router } from 'express';

import defaultController from '../controllers/DefaultController';

const router = Router();

router.get('/hello', defaultController.helloWorld);

/*
 * To use another controller, use:
 * import controllerName from '../controllers/<ControllerName>';
 * router.get|put|post|delete|use('/<path-name>', <controllerName>.<controllerMethod)
 */

router.use('/api', (req, res) => {
  res.send(`
    <h2>Express API</h2>
    <p>
      You have reached the express API.
      Email rf.raymondfeng@gmail.com for any questions on usage.
    </p>
  `);
});

module.exports = router;
