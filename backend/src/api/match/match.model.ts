import mongoose from 'mongoose'
import { Match } from './match.entity'

const matchSchema = new mongoose.Schema<Match>({
  date: String,
  playerA: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  playerB: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scoreA: { type: Number, default: 0 },
  scoreB: { type: Number, default: 0 },
  played: { type: Boolean, default: false }
})

matchSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id
    delete ret.__v
    return ret
  }
})

export const MatchModel = mongoose.model<Match>('Match', matchSchema)
