import {EventData} from './event-data';

export class TimelineEvent {

  constructor(eventData: EventData) {
    this._eventData = eventData;
  }

  private _eventData: EventData;

  get eventData(): EventData {return this._eventData; }
  get id(): number {return this._eventData.id; }
  get keywords(): string[] {return this._eventData ? this._eventData.keywords : []; }

  toString() {
    let x: string;
    const parts = this._eventData.date.split(/[\s,]+/);
    switch (parts.length) {
      case 1:
        x = parts[0];
        break;

      case 2:
        x = parts[1] + new Date(this._eventData.date).getMonth().toString().padStart(2, '0');
        break;

      case 3:
        x = parts[2] + new Date(this._eventData.date).getMonth().toString().padStart(2, '0') + parts[1].padStart(2, '0');
        break;
    }

    return x;
  }
}
