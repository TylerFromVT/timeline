import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TimelineEvent} from '../../timeline-event';
import {Timeline} from '../../timeline';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnChanges {

  @Input() event: TimelineEvent;
  @Output() emitUpdateEvent = new EventEmitter<TimelineEvent>();
  @Output() emitDeleteEvent = new EventEmitter<TimelineEvent>();

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes) {
    if (changes['event']) {
      this.event = changes['event'].currentValue;
    }
  }

  onEdit(element: any) {
    element.removeAttribute('readonly');
    element.classList.remove('readonly');
  }

  onSaveEvent(element: any) {
    element.setAttribute('readonly', '');
    element.classList.add('readonly');
    this.emitUpdateEvent.emit(this.event);
  }

  onDeleteEvent() {
    this.emitDeleteEvent.emit(this.event);
  }


}
