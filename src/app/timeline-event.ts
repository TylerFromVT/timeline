import { TimelineDate } from './timeline-date';

export class TimelineEvent {

  constructor(x) {
    this.id = x.id;
    this.title = x.title;
    this.details = x.details;
    this.keywords = x.keywords;
    this.date = new TimelineDate(x.date);
    this.readOnly = true;
  }

  id: number;
  date: TimelineDate;
  title: string;
  details: string;
  keywords: string[];
  readOnly: boolean;

  toString() {
    return this.date.toString();
  }

}
