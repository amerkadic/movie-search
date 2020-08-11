import { Router } from 'express';
import auth from '../middlewares/auth';
const router = Router();

import UserController from "../controllers/user.controller";

router.post('/login', UserController.loginUser)
router.post('/register', UserController.registerUser)
router.get('/user', auth, UserController.getUser)

export default router;