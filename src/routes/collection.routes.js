import { Router } from 'express';
import auth from '../middlewares/auth';
const router = Router();

import CollectionController from "../controllers/collection.contoller";

router.get('/', auth, CollectionController.getCollection)
router.post('/add', auth, CollectionController.addInCollection)
router.delete('/delete/:id', auth, CollectionController.deleteCollection)

export default router;