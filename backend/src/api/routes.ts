import { Router } from 'express'
import matchRouter from './match/match.router'
import userRouter from './user/user.router'
import authRouter from './auth/auth.router'

const router = Router()

router.use('/events', matchRouter)
router.use('/users', userRouter)
router.use(authRouter)

export default router
