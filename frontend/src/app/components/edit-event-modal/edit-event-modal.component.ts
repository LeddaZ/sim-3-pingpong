import { Component, EventEmitter, Input, Output } from '@angular/core'
import { EventSourceService } from '../../services/event-source.service'
import { Event } from '../../entities/event.entity'

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './edit-event-modal.component.html'
})
export class EditEventModalComponent {
  minDate = Date()
  title!: string
  description!: string
  date!: string

  @Input() event!: Event

  @Output() editEvent = new EventEmitter<[string, string, string, string]>()

  constructor(protected eventSrv: EventSourceService) {}

  edit() {
    this.editEvent.emit([this.event.id, this.title, this.description, this.date])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.title = ''
    this.description = ''
    this.date = ''
  }
}
