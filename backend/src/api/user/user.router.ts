import { Router } from 'express'
import { me, update, users } from './user.controller'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'

const router = Router()

router.use(isAuthenticated)
router.get('/me', me)
router.get('/', users)
router.patch('/:id', update)

export default router
