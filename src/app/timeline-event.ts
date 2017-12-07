import { TimelineDate } from './timeline-date';

export class TimelineEvent {

  constructor(x) {
    this.id = x.id;
    this.title = x.title;
    this.details = x.details;
    this.keywords = x.keywords;
    this.date = new TimelineDate(x.date);
    this.showSave = false;
    this.dateIsReadOnly = true;
    this.titleIsReadOnly = true;
    this.detailsAreReadOnly = true;
  }

  id: number;
  date: TimelineDate;
  title: string;
  details: string;
  keywords: string[];
  showSave: boolean;
  dateIsReadOnly: boolean;
  titleIsReadOnly: boolean;
  detailsAreReadOnly: boolean;

  toString() {
    return this.date.toString();
  }

}
