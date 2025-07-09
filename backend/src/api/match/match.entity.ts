import { Types } from 'mongoose'

export class Match {
  id: string
  date: string
  playerA: Types.ObjectId
  playerB: Types.ObjectId
  scoreA: number
  scoreB: number
  played: boolean
}
