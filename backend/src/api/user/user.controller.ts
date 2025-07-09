import { NextFunction, Response, Request } from 'express'
import userService from './user.service'

export const me = async (req: Request, res: Response, _next: NextFunction) => {
  res.json(req.user!)
}

export const users = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.list()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { newParticipant, newOrganizer } = req.body
    const updated = await userService.update(id, newParticipant, newOrganizer)
    res.json(updated)
  } catch (err) {
    next(err)
  }
}
