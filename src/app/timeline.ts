import {TimelineEvent} from './timeline-event';

export class Timeline {

  constructor(eventList: any[]) {
    console.debug('Timeline Class: Constructor');

    this.keywords = new Set();
    this.events = [];
    this.filteredEvents = [];
    for (const x of eventList) {
      const timelineEvent = new TimelineEvent(x);
      this.events.push(timelineEvent);
      for (const keyword of timelineEvent.keywords) {
        this.keywords.add(keyword);
      }
    }
    this.events.sort();
  }

  keywords: Set<string>;
  filteredEvents: TimelineEvent[];
  private events: TimelineEvent[];

  filter(enabledKeywords) {
    console.log('New Filtering');
    console.log(enabledKeywords);
    this.filteredEvents = [];
    for (const event of this.events) {
      if (this.findOne(enabledKeywords, event.keywords) === true) {
        this.filteredEvents.push(event);
      }
    }
    this.filteredEvents.sort();
  }



  findOne(haystack, arr) {
    if (arr.length) {
      return arr.some(function (v) {
        return Array.from(haystack).indexOf(v) >= 0;
      });
    }
  }



}


