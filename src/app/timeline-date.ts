export class TimelineDate {

  constructor(dateString: string) {
    this.dateString = '';

    if (dateString) {
      this.dateString = dateString;
      this.month = '';
      this.day = '';

      const parts = dateString.split(/[\s,]+/);
      switch (parts.length) {
        case 1:
          this.year = parts[0];
          break;

        case 2:
          this.year = parts[1];
          this.month = new Date(dateString).getMonth().toString().padStart(2, '0');
          break;

        case 3:
          this.year = parts[2];
          this.month = new Date(dateString).getMonth().toString().padStart(2, '0');
          this.day = parts[1].padStart(2, '0');
          break;
      }
    }
  }

  dateString: string;
  private year: string;
  private month: string;
  private day: string;

  toDisplayString() {
    return this.dateString;
  }

  // Key to ordering objects
  toString() {
    return this.year + this.month + this.day;
  }
}
