import {TestBed, inject} from '@angular/core/testing';

import {TimelineService} from './timeline.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {EventData} from '../event-data';

describe('TimelineService', () => {
  let timelineService: TimelineService;
  let httpMock: HttpTestingController;

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
  });

  it('should be created', inject([TimelineService], (service: TimelineService) => {
    expect(service).toBeTruthy();
  }));

  describe('Happy Path', () => {
    let id: number, keyword: string, eventData: EventData, responseBody: EventData[], req: TestRequest;

    beforeEach(() => {
      id = 47;
      keyword = 'Some Keyword';
      eventData = new EventData();
      eventData.id = id;
      eventData.keywords = [keyword];
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
      service.deleteEvent(eventData).subscribe((events: EventData[]) => {
        expect(events[0].keywords[0]).toBe(keyword);
      });

      req = httpMock.expectOne(url + '/' + id);
      req.flush(responseBody);
    }));
  });

  describe('Unhappy Path', () => {

  });

});


