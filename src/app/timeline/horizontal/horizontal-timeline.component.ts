import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EventData} from '../../event-data';
import {TimelineEvent} from '../../timeline-event';

@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.css']
})
export class HorizontalTimelineComponent implements OnInit, OnChanges {

  @Input() timelineData: EventData[];
  @Input() enabledKeywords: string[];
  @Output() emitEvent = new EventEmitter<TimelineEvent>();
  @Output() emitDeleteEvent = new EventEmitter<TimelineEvent>();


  // events: TimelineEvent[];  // Can this be EvenData[]?

  years: number[];
  eventsByYear: TimelineEvent[][];
  event: TimelineEvent;

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


    if (this._timelineData.length) {

      const events: TimelineEvent[] = filterEvents.call(this);

      if (events.length) {
        const firstYear = events[0].year;
        const lastYear = events[events.length - 1].year;

        this.years = range(firstYear, lastYear - firstYear + 1);

        this.eventsByYear = [];

        for (let year = firstYear; year <= lastYear; year++) {
          const thisYear = new Array<TimelineEvent>();
          for (const event of events) {
            if (event.year === year) {
              thisYear.push(event);
            }
          }
          this.eventsByYear[year] = thisYear;
        }
      }
    }

    function filterEvents() {
      const events = [];
      for (const event of this._timelineData) {
        const timelineEvent = new TimelineEvent(event);
        if (this.findOne(this._enabledKeywords, timelineEvent.keywords) === true) {
          events.push(timelineEvent);
        }
      }
      events.sort();
      return events;
    }

    function range(start, count) {
      return Array.apply(0, Array(count))
        .map(function (element, index) {
          return index + start;
        });
    }

  }

  showEventDetails(event: TimelineEvent) {
    this.event = event;
  }

  findOne(haystack, arr) {
    if (arr.length) {
      return arr.some(function (v) {
        return Array.from(haystack).indexOf(v) >= 0;
      });
    }
  }


}
