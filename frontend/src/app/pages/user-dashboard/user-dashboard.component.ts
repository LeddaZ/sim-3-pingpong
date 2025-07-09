import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { UserService } from '../../services/user.service'
import { User } from '../../entities/user.entity'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent {
  currentUser$ = this.authSrv.currentUser$

  constructor(
    protected authSrv: AuthService,
    protected userSrv: UserService
  ) {}

  participate(id: string, organizer: boolean) {
    this.userSrv.update(id, true, organizer).subscribe({
      next: (updatedUser: User) => {
        this.authSrv.updateCurrentUserState(updatedUser)
      }
    })
  }

  becomeOrganizer(id: string, participating: boolean) {
    this.userSrv.update(id, participating, true).subscribe({
      next: (updatedUser: User) => {
        this.authSrv.updateCurrentUserState(updatedUser)
      }
    })
  }
}
