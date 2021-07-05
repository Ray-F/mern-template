import { Router } from 'express';
import { DefaultController } from '../controller/DefaultController';

/*
 * Main routing file to manage all application route.
 */

const defaultController = new DefaultController();

const router = Router();
router.use('/api', defaultController.api404);


export default router;
