import { Router } from 'express';
import { DefaultController } from '../controller/DefaultController';

/*
 * Main routing file to manage all application route.
 */

const router = Router();

const defaultController = new DefaultController();
router.use('/api', defaultController.api404);

export default router;
