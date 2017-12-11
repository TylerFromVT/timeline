import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {EventData} from '../../event-data';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnChanges {

  @Input() eventData: EventData;
  @Output() emitUpdateEvent = new EventEmitter<EventData>();
  @Output() emitDeleteEvent = new EventEmitter<EventData>();

  keywordString: string;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes) {
    if (changes['eventData']) {
      this.eventData = changes['eventData'].currentValue;
      this.keywordString = this.eventData.keywords.join(', ');
    }
  }

  onEdit(element: any) {
    element.removeAttribute('readonly');
    element.classList.remove('readonly');
  }

  onSaveEvent(element: any) {
    this.eventData.keywords = getKeywordArray.call(this);
    element.setAttribute('readonly', '');
    element.classList.add('readonly');
    this.emitUpdateEvent.emit(this.eventData);

    function getKeywordArray() {
      return this.keywordString.split(',').map(function (keyword) {
        return keyword.trim();
      });
    }

  }

  onDeleteEvent() {
    this.emitDeleteEvent.emit(this.eventData);
  }
}
