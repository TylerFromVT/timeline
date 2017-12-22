import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {TimelineEvent} from '../../timeline-event';
import {EventData} from '../../event-data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnChanges {

  @Input() timelineData: EventData[];
  @Input() enabledKeywords: string[];
  @Output() emitEvent = new EventEmitter<TimelineEvent>();
  @Output() emitDeleteEvent = new EventEmitter<TimelineEvent>();

  events: TimelineEvent[];  // Can this be EvenData[]?
  private _timelineData: EventData[];
  private _enabledKeywords: string[];


  constructor() {
    this.timelineData = [];
    this._timelineData = [];
    this.enabledKeywords = [];
    this._enabledKeywords = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['timelineData'] && changes['timelineData'].currentValue) {
      this._timelineData = changes['timelineData'].currentValue;
    }
    if (changes['enabledKeywords'] && changes['enabledKeywords'].currentValue) {
      this._enabledKeywords = changes['enabledKeywords'].currentValue;
    }

    filterEvents.call(this);

    function filterEvents() {
      this.events = [];
      for (const event of this._timelineData) {
        const timelineEvent = new TimelineEvent(event);
        if (this.findOne(this._enabledKeywords, timelineEvent.keywords) === true) {
          this.events.push(timelineEvent);
        }
      }
      this.events.sort();
    }
  }

  findOne(haystack, arr) {
    if (arr.length) {
      return arr.some(function (v) {
        return Array.from(haystack).indexOf(v) >= 0;
      });
    }
  }

  onDeleteEvent(event: TimelineEvent) {
    this.emitDeleteEvent.emit(event);
  }

  onUpdateEvent(event: TimelineEvent) {
    this.emitEvent.emit(event);
  }
}
