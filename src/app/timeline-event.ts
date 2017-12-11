import { TimelineDate } from './timeline-date';

export class TimelineEvent {

  constructor(eventData) {

    this.date = new TimelineDate(null);
    this.title = '';
    this.details = '';

    if (eventData) {
      this.id = eventData.id;
      this.title = eventData.title;
      this.details = eventData.details;
      this.keywords = eventData.keywords;
      this.date = new TimelineDate(eventData.date);
      this.showSave = false;
      this.dateIsReadOnly = true;
      this.titleIsReadOnly = true;
      this.detailsAreReadOnly = true;
    }
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
