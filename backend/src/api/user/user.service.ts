import { UserModel } from './user.model'
import { UserIdentity as UserIdentityModel } from '../../utils/auth/local/user-identity.model'
import { User } from './user.entity'
import { UserExistsError } from '../../errors/user-exists'
import * as bcrypt from 'bcrypt'
import { NotFoundError } from '../../errors/not-found'

export class UserService {
  async add(user: User, credentials: { username: string; password: string }): Promise<User> {
    const existingIdentity = await UserIdentityModel.findOne({
      'credentials.username': credentials.username
    })
    if (existingIdentity) {
      throw new UserExistsError()
    }
    const hashedPassword = await bcrypt.hash(credentials.password, 10)

    const newUser = await UserModel.create(user)

    await UserIdentityModel.create({
      provider: 'local',
      user: newUser._id,
      credentials: {
        username: credentials.username,
        hashedPassword
      }
    })

    return newUser
  }

  async list(): Promise<User[]> {
    return UserModel.find()
  }

  async update(id: string, newParticipant: boolean, newOrganizer: boolean): Promise<User> {
    const existing = await UserModel.findOne({
      _id: id
    })
    if (!existing) {
      throw new NotFoundError()
    }

    Object.assign(existing, {
      participating: newParticipant,
      organizer: newOrganizer
    })
    await existing.save()
    const updated = await this.getById(id)
    return updated!
  }

  async getById(id: string): Promise<User | null> {
    const item = await UserModel.findOne({
      _id: id
    })

    if (!item) {
      return null
    }

    return item
  }

  async getParticipants(): Promise<User[]> {
    return UserModel.find({
      participating: true
    })
  }
}

export default new UserService()
