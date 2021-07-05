import { Router } from 'express';
import { DefaultController } from '../controllers/DefaultController';

/*
 * Main routing file to manage all application routes.
 */

const defaultController = new DefaultController();

const router = Router();
router.use('/api', defaultController.api404);


export default router;
