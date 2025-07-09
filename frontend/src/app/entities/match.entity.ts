import { User } from './user.entity'

export interface Match {
  id: string
  date: string
  playerA: User
  playerB: User
  scoreA: string
  scoreB: string
  played: boolean
}
