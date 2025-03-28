import { Router } from 'express';
import auth from '../middleware/auth.js';
import { GetCategoryController } from '../controllers/category.controller.js';
const categoryRouter = Router();
import { AddCateoryController } from '../controllers/category.controller.js';

categoryRouter.post("/add-category",auth,AddCateoryController)
categoryRouter.get('/get', GetCategoryController)

export default categoryRouter;