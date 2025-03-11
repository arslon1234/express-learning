import {Router} from 'express'
import { authContoller } from '../controllers/index.js'
import { authMiddleware,validateData } from '../middleware/index.js'
import { signUpSchema, signInSchema } from '../validations/index.js'
export const authRouter = Router()

authRouter.post('/signup',validateData(signUpSchema), authContoller.signup)
authRouter.post('/signin', authContoller.signin)
authRouter.get('/profile', authMiddleware, authContoller.profile)
authRouter.get('/get-all', authMiddleware, authContoller.getAll)
authRouter.post('/logout', authContoller.logout)
authRouter.delete('/delete/:id', authMiddleware, authContoller.deleteUser)