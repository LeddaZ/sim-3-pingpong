import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Match } from '../../entities/match.entity'
import { MatchService } from '../../services/match.service'
import { User } from '../../entities/user.entity'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-edit-match-modal',
  templateUrl: './edit-match-modal.component.html'
})
export class EditMatchModalComponent {
  minDate = Date()
  date!: string
  userIdA!: string
  userIdB!: string
  scoreA: number = 0
  scoreB: number = 0
  played: boolean = false
  users: User[] = []

  @Input() match!: Match

  @Output() editEvent = new EventEmitter<
    [string, string, string, string, number, number, boolean]
  >()

  constructor(
    protected matchSrv: MatchService,
    protected userSrv: UserService
  ) {}

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe((users) => {
      this.users = users
    })
    this.userIdA = ''
    this.userIdB = ''
    this.scoreA = 0
    this.scoreB = 0
    this.played = false
  }

  edit() {
    this.editEvent.emit([
      this.match.id,
      this.date,
      this.userIdA,
      this.userIdB,
      this.scoreA,
      this.scoreB,
      this.played
    ])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.date = ''
  }
}
