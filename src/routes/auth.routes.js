// import {Router} from 'express'
// import { authContoller } from '../controllers/index.js'
// import { authMiddleware,validateData } from '../middleware/index.js'
// import { signUpSchema, signInSchema } from '../validations/index.js'
// export const authRouter = Router()

// authRouter.post('/signup', validateData(signUpSchema), authContoller.signup)
// authRouter.post('/signin', authContoller.signin)
// authRouter.get('/profile', authMiddleware, authContoller.profile)
// authRouter.get('/get-all', authContoller.getAll)
// authRouter.post('/logout', authContoller.logout)
// authRouter.delete('/delete/:id', authContoller.deleteUser)

import { Router } from "express";

export const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ message: "sign-up" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send( { message: "sign-in" });
});
