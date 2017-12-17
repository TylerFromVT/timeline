import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EventData} from '../../../event-data';
import {TimelineEvent} from '../../../timeline-event';

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


  events: TimelineEvent[];  // Can this be EvenData[]?

  gahs: number[];
  years: TimelineEvent[][];

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

    console.log('ngOnChanges');
    console.log(changes);


    if (changes['timelineData'] && changes['timelineData'].currentValue) {
      this._timelineData = changes['timelineData'].currentValue;
      console.log(this._timelineData);
    }

    if (changes['enabledKeywords'] && changes['enabledKeywords'].currentValue) {
      this._enabledKeywords = changes['enabledKeywords'].currentValue;
    }


    if (this._timelineData.length) {

      filterEvents.call(this);

      if (this.events.length) {
        console.log(this.events);
        console.log('Horizontal Timeline');
        const firstYear = this.events[0].year;
        const lastYear = this.events[this.events.length - 1].year;

        this.gahs = range(firstYear, lastYear - firstYear + 1);

        this.years = [];

        for (let year = firstYear; year <= lastYear; year++) {
          const thisYear = new Array<TimelineEvent>();
          for (const event of this.events) {
            if (event.year === year) {
              thisYear.push(event);
            }
          }
          console.log(year);
          console.log(thisYear);
          this.years[year] = thisYear;
        }
      }
    }

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

    function range(start, count) {
      return Array.apply(0, Array(count))
        .map(function (element, index) {
          return index + start;
        });
    }

  }

  findOne(haystack, arr) {
    if (arr.length) {
      return arr.some(function (v) {
        return Array.from(haystack).indexOf(v) >= 0;
      });
    }
  }


}
