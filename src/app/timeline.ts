import {TimelineEvent} from './timeline-event';

export class Timeline {

  constructor(eventList: any[]) {
    console.debug('Timeline Class: Constructor');

    this.keywords = new Set();
    this.enabledKeywords = new Set();
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

  private events: TimelineEvent[];
  private filteredEvents: TimelineEvent[];
  private keywords: Set<string>;
  private enabledKeywords: Set<string>;

  filter(keyword, checked) {
    console.log('Filtering');
    console.log(keyword);
    console.log(checked);
    console.log(this.enabledKeywords);

    if (checked) {
      this.enabledKeywords.add(keyword);
    } else {
      this.enabledKeywords.delete(keyword);
    }
    console.log(this.enabledKeywords);

    this.filteredEvents = [];
    for (const event of this.events) {
      if (this.findOne(this.enabledKeywords, event.keywords) === true) {
        this.filteredEvents.push(event);
      }
    }

    console.log(this.filteredEvents);

    this.filteredEvents.sort();
  }


  findOne(haystack, arr) {
    return arr.some(function (v) {
      return Array.from(haystack).indexOf(v) >= 0;
    });
  }



}


