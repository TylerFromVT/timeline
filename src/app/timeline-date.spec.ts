import { TestBed, inject } from '@angular/core/testing';

import { TimelineDate } from './timeline-date';

let firstDate: TimelineDate;

describe('TimelineDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineDate]
    });
  });

  describe('Illegal input', () => {
    it('empty date specified', () => {
      expect(function() {
        new TimelineDate('');
      }).toThrowError('No date specified');
    });
  });

  describe('Valid input', () => {
    describe('Fully specified date', () => {
      let timelineDate: TimelineDate;
      beforeEach(() => {
        timelineDate = new TimelineDate('August 15, 1959');
      });
      it('should create something', () => {
        expect(timelineDate).toBeTruthy();
      });
      it('should return correct date string', () => {
        expect(timelineDate.toDisplayString()).toBe('August 15, 1959');
      });
    });
    describe('Just a year', () => {
      let timelineDate: TimelineDate;
      beforeEach(() => {
        timelineDate = new TimelineDate('1959');
      });
      it('should create something', () => {
        expect(timelineDate).toBeTruthy();
      });
      it('should return correct date string', () => {
        expect(timelineDate.toDisplayString()).toBe('1959');
      });
    });

    describe('Comparison', () => {

      describe('same types', () => {

        describe('just years', () => {

          it ('different', () => {
            expect(new TimelineDate('1962') > new TimelineDate('1959')).toBeTruthy();
          });

        });

        describe('Years and months', () => {

          it ('should compare months years correctly', () => {
            expect(new TimelineDate('October 1962') > new TimelineDate('August 1962')).toBeTruthy();
          });

          it ('should compare years correctly', () => {
            expect(new TimelineDate('August 1962') > new TimelineDate('October 1959')).toBeTruthy();
          });

          it ('should compare years correctly even if leading characters do not', () => {
            expect(new TimelineDate('December 1962') > new TimelineDate('August 1962')).toBeTruthy();
          });
        });

        describe('Years, months and days', () => {

          it ('different years', () => {
            expect(new TimelineDate('October 1, 1962') > new TimelineDate('October 1, 1961')).toBeTruthy();
          });

          it ('same years but different month', () => {
            expect(new TimelineDate('October 1, 1962') > new TimelineDate('August 1, 1961')).toBeTruthy();
          });

          it ('same year and month but different date', () => {
            expect(new TimelineDate('October 10, 1962') > new TimelineDate('October 9, 1962')).toBeTruthy();
          });
        });
      });

      describe('different types', () => {


        describe ('year only vs.', () => {

          beforeEach(() => {
            firstDate = new TimelineDate('1962');
          });

          describe ('month/day', () => {

            it ('greater than', () => {
              expect(firstDate > new TimelineDate('August 1961')).toBeTruthy();
            });

            it ('less than', () => {
              expect(firstDate < new TimelineDate('August 1962')).toBeTruthy();
            });

          });

          describe ('year/month/day', () => {

            it ('greater than', () => {
              expect(firstDate > new TimelineDate('August 15, 1961')).toBeTruthy();
            });

            it ('less than', () => {
              expect(firstDate < new TimelineDate('August 15, 1962')).toBeTruthy();
            });
          });
        });


        describe('year/month vs.', () => {

          beforeEach(() => {
            firstDate = new TimelineDate('August 1961');
          });

          describe('year only', () => {

            it ('greater than', () => {
              expect(firstDate > new TimelineDate('1960')).toBeTruthy();
            });

            it ('less than', () => {
              expect(firstDate < new TimelineDate('1962')).toBeTruthy();
            });
          });

          describe('year/month/day', () => {

            it ('greater than', () => {
              expect(firstDate < new TimelineDate('August 15, 1961')).toBeTruthy();
            });

            it ('less than', () => {
              expect(firstDate < new TimelineDate('August 15, 1962')).toBeTruthy();
            });
          });

        });
      });
    });
  });
});
