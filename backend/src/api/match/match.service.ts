import { NotFoundError } from '../../errors/not-found'
import { MatchModel } from './match.model'
import { Match } from './match.entity'

export class MatchService {
  async list(): Promise<Match[]> {
    return await MatchModel.find().sort({ dueDate: 1 }).populate('playerA').populate('playerB')
  }

  async add(match: Partial<Omit<Match, 'id'>>): Promise<Match> {
    const newItem = await MatchModel.create({
      ...match
    })
    return (await this.getById(newItem.id))!
  }

  async remove(id: string): Promise<Match> {
    const existing = await MatchModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    await MatchModel.deleteOne({
      _id: id
    })

    return existing
  }

  async update(
    id: string,
    date: string,
    playerA: string,
    playerB: string,
    scoreA: number,
    scoreB: number,
    played: boolean
  ): Promise<Match> {
    const existing = await MatchModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    Object.assign(existing, {
      date,
      playerA,
      playerB,
      scoreA,
      scoreB,
      played
    })
    await existing.save()
    const updated = await this.getById(id)
    return updated!
  }

  async getById(id: string): Promise<Match | null> {
    const item = await MatchModel.findOne({
      _id: id
    })

    if (!item) {
      return null
    }

    return item
  }
}

export default new MatchService()
