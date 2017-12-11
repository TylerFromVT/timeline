import {EventData} from './event-data';

export class TimelineEvent {

  constructor(eventData: EventData) {
    this._eventData = eventData;
  }

  private _eventData: EventData;

  get id(): number {return this._eventData ? this._eventData.id : null; }
  get date(): string {return this._eventData ? this._eventData.date : null; }
  get title(): string {return this._eventData ? this._eventData.title : null; }
  get details(): string {return this._eventData ? this._eventData.details : null; }
  get keywords(): string[] {return this._eventData ? this._eventData.keywords : []; }

  toString() {
    let x: string;
    const parts = this.date.split(/[\s,]+/);
    switch (parts.length) {
      case 1:
        x = parts[0];
        break;

      case 2:
        x = parts[1] + new Date(this.date).getMonth().toString().padStart(2, '0');
        break;

      case 3:
        x = parts[2] + new Date(this.date).getMonth().toString().padStart(2, '0') + parts[1].padStart(2, '0');
        break;
    }

    return x;
  }

}
