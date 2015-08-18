import express from 'express';
import * as controller from '../controllers/message.controller';

const router = express.Router();

router.use('/', controller.requestLogger);
router.post('/:action', controller.checkPaylod);

export default router;
