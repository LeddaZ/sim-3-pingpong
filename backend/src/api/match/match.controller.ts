import { NextFunction, Request, Response } from 'express'
import { TypedRequest } from '../../utils/typed-request.interface'
import matchService from './match.service'
import { CreateMatchDTO } from './match.dto'
import { Match } from './match.entity'
import { Types } from 'mongoose'

export const list = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const results = await matchService.list()
    res.json(results)
  } catch (err) {
    next(err)
  }
}

export const add = async (req: TypedRequest<CreateMatchDTO>, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user || !user.organizer) {
      res.status(403).json({ message: "You don't have permission to perform this action." })
    }
    const { date, playerA, playerB } = req.body
    const newItem: Partial<Omit<Match, 'id'>> = {
      date: date,
      playerA: new Types.ObjectId(playerA),
      playerB: new Types.ObjectId(playerB),
      scoreA: 0,
      scoreB: 0,
      played: false
    }

    if (playerA === playerB) {
      res.status(400).json({ message: 'Player A and Player B cannot be the same.' })
      return
    }

    const saved = await matchService.add(newItem)
    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
}

export const remove = async (
  req: TypedRequest<CreateMatchDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user
    if (!user || !user.organizer) {
      res.status(403).json({ message: "You don't have permission to perform this action." })
    }
    const { id } = req.params
    const saved = await matchService.remove(id)
    res.status(200).json(saved)
  } catch (err) {
    next(err)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user
    if (!user || !user.organizer) {
      res.status(403).json({ message: "You don't have permission to perform this action." })
    }
    const { id } = req.params
    const { date, playerA, playerB, scoreA, scoreB, played } = req.body
    const updated = await matchService.update(id, date, playerA, playerB, scoreA, scoreB, played)
    res.json(updated)
  } catch (err) {
    next(err)
  }
}
