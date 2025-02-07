import { Router } from 'express';
import auth from '../middleware/auth.js';
const categoryRouter = Router();
import { AddCateoryController } from '../controllers/category.controller.js';

categoryRouter.post("/add-category",auth,AddCateoryController)

export default categoryRouter;