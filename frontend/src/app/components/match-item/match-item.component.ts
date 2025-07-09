import { Component, Input } from '@angular/core'
import { Match } from '../../entities/match.entity'

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html',
  styleUrl: './match-item.component.css'
})
export class MatchItemComponent {
  @Input()
  match!: Match

  constructor() {}
}
