import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventData} from '../event-data';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  @Output() emitEvent = new EventEmitter<EventData>();
  eventData: EventData = new EventData();

  constructor() {
  }

  ngOnInit() {
  }

  addEvent() {
    console.log('Add an Event');
    this.eventData.keywords.push('Brown');
    this.emitEvent.emit(this.eventData);
  }
}
