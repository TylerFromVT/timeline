import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventData} from '../../../event-data';

@Component({
  selector: 'app-horizontal-event',
  templateUrl: './horizontal-event.component.html',
  styleUrls: ['./horizontal-event.component.css']
})
export class HorizontalEventComponent implements OnInit, OnChanges {

  @Input() eventData: EventData;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventData'] && changes['eventData'].currentValue) {
      this.eventData = changes['eventData'].currentValue;
    }
  }

}
