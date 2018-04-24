import express from 'express';
import subJectController from '../controllers/subject';
import middlewareAuth from '../utils/auth/middleAuth';
const router = express.Router();

router.get('/', middlewareAuth, subJectController.get);

export default router;