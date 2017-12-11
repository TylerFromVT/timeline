export class EventData {

  id: number;
  date: string;
  title: string;
  details: string;
  keywords: string[];

  constructor() {
    this.date = '';
    this.title = '';
    this.details = '';
    this.keywords = [];
  }
}
