import { User } from './user.entity'

export interface Registration {
  id: string
  user: User
  event: Event
  checkedIn: boolean
  checkInTime: string
}
