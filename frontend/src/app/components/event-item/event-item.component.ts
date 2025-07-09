import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Event } from '../../entities/event.entity'
import { EventSourceService } from '../../services/event-source.service'

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  @Input()
  event!: Event

  @Output() editEvent = new EventEmitter<[string, string, string, string]>()
  @Output() delEvent = new EventEmitter<string>()

  constructor(protected eventSrv: EventSourceService) {}

  onEditEvent(eventData: [string, string, string, string]) {
    this.editEvent.emit(eventData)
  }

  del(eventData: string) {
    this.delEvent.emit(eventData)
  }
}
