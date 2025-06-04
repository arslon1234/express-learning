import { Router } from "express";
import { blogController } from "../controllers/index.js";
import { authMiddleware } from "../middleware/index.js";

export const blogRouter = Router()

blogRouter.get('/' , blogController.getAll)
blogRouter.post('/', blogController.create)
blogRouter.delete('/:id' , blogController.delete)