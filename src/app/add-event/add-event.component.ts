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
  keywordString: string;

  constructor() {}

  ngOnInit() {}

  addEvent() {
    this.eventData.keywords = this.keywordString.split(',').map(function(keyword) {return keyword.trim();});
    this.emitEvent.emit(this.eventData);
  }
}
