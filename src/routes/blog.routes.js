import { Router } from "express";
import { blogController } from "../controllers/index.js";
import { authMiddleware } from "../middleware/index.js";

export const blogRouter = Router()

blogRouter.get('/', authMiddleware , blogController.getAll)
blogRouter.post('/', authMiddleware , blogController.create)
blogRouter.delete('/:id', authMiddleware , blogController.delete)