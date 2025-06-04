import { Router } from "express";
// import { AppDataSource } from "../data-source.js";
import { userController } from "../controllers/index.js";
export const userRouter = Router()

userRouter.get("/", userController.getAll);

userRouter.post("/", userController.create);
userRouter.get('/:id', (req, res)=> res.send({title: 'GET user BY id'}))


userRouter.put('/:id', (req, res)=> res.send({title: 'UPDATE user'}))
userRouter.delete('/:id', (req, res)=> res.send({title: 'DELETE user'}))

