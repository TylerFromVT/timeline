import {TestBed, inject} from '@angular/core/testing';

import {TimelineService} from './timeline.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {EventData} from '../event-data';

describe('TimelineService', () => {
  let timelineService: TimelineService;
  let httpMock: HttpTestingController;

  let id: number, keyword: string, eventData: EventData, responseBody: EventData[], req: TestRequest;

  const url = 'http://localhost:3000/timeline';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TimelineService
      ]
    });
    timelineService = TestBed.get(TimelineService);
    httpMock = TestBed.get(HttpTestingController);

      id = 47;
      keyword = 'Some Keyword';
      eventData = new EventData();
      eventData.id = id;
      eventData.keywords = [keyword];
  });

  it('should be created', inject([TimelineService], (service: TimelineService) => {
    expect(service).toBeTruthy();
  }));

  describe('Happy Path', () => {

    beforeEach(() => {
      responseBody = [eventData];
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should getEvents', inject([TimelineService], (service: TimelineService) => {
      service.getEvents().subscribe((events: EventData[]) => {
        expect(events[0].keywords[0]).toBe(keyword);
      });

      req = httpMock.expectOne(url);
      req.flush(responseBody);
    }));

    it('should add event', inject([TimelineService], (service: TimelineService) => {
      service.addEvent(eventData).subscribe((events: EventData[]) => {
        expect(events[0].keywords[0]).toBe(keyword);
      });

      req = httpMock.expectOne(url);
      req.flush(responseBody);
    }));

    it('should update event', inject([TimelineService], (service: TimelineService) => {
      service.updateEvent(eventData).subscribe((events: EventData[]) => {
        expect(events[0].keywords[0]).toBe(keyword);
      });

      req = httpMock.expectOne(url);
      req.flush(responseBody);
    }));

    it('should deleteEvent event', inject([TimelineService], (service: TimelineService) => {
      service.deleteEvent(eventData.id).subscribe((events: EventData[]) => {
        expect(events[0].keywords[0]).toBe(keyword);
      });

      req = httpMock.expectOne(url + '/' + id);
      req.flush(responseBody);
    }));
  });

  describe('Unhappy Path', () => {

    let errorEvent;

    beforeEach(() => {
      errorEvent = new ErrorEvent('Error');
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should return empty list of events for getEvents', inject([TimelineService], (service: TimelineService) => {
      service.getEvents().subscribe((events: EventData[]) => {
        expect(events.length).toBe(0);
      });

      req = httpMock.expectOne(url);
      req.error(errorEvent);
    }));

    it('should return empty list of events for addEvent', inject([TimelineService], (service: TimelineService) => {
      service.addEvent(eventData).subscribe((events: EventData[]) => {
        expect(events.length).toBe(0);
      });

      req = httpMock.expectOne(url);
      req.error(errorEvent);
    }));

    it('should return empty list of events for updateEvent', inject([TimelineService], (service: TimelineService) => {
      service.updateEvent(eventData).subscribe((events: EventData[]) => {
        expect(events.length).toBe(0);
      });

      req = httpMock.expectOne(url);
      req.error(errorEvent);
    }));

    it('should return empty list of events for deleteEvent', inject([TimelineService], (service: TimelineService) => {
      service.deleteEvent(eventData.id).subscribe((events: EventData[]) => {
        expect(events.length).toBe(0);
      });

      req = httpMock.expectOne(url + '/' + id);
      req.error(errorEvent);
    }));

  });

});


