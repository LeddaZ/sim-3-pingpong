import express from 'express'
import { isAuthenticated } from '../../utils/auth/authenticated-middleware'
import { validate } from '../../utils/validation-middleware'
import { add, list, remove, update } from './match.controller'
import { CreateMatchDTO } from './match.dto'

const router = express.Router()

router.use(isAuthenticated)
router.get('/', list)
router.post('/', validate(CreateMatchDTO), add)
router.delete('/:id', remove)
router.patch('/:id', validate(CreateMatchDTO), update)

export default router
