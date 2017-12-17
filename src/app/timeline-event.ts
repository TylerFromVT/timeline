import {EventData} from './event-data';

export class TimelineEvent {

  constructor(eventData: EventData) {
    this._eventData = eventData;

    const parts = this._eventData.date.split(/[\s,]+/);
    switch (parts.length) {
      case 1:
        this.theString = parts[0];
        this._year = +parts[0];
        break;

      case 2:
        this.theString = parts[1] + new Date(this._eventData.date).getMonth().toString().padStart(2, '0');
        this._year = +parts[1];
        break;

      case 3:
        this.theString = parts[2] + new Date(this._eventData.date).getMonth().toString().padStart(2, '0') + parts[1].padStart(2, '0');
        this._year = +parts[2];
        break;
    }
  }

  private _eventData: EventData;
  private theString: string;
  private _year: number;

  get eventData(): EventData {return this._eventData; }
  get id(): number {return this._eventData.id; }
  get year(): number {return this._year; }
  get keywords(): string[] {return this._eventData ? this._eventData.keywords : []; }

  toString() {
    return this.theString;
  }
}
