import { Router } from 'express';
import auth from '../middlewares/auth';
import UserController from "../controllers/user.controller";

const router = Router();

router.post('/login', UserController.loginUser)
router.post('/register', UserController.registerUser)
router.get('/user', auth, UserController.getUser)

export default router;