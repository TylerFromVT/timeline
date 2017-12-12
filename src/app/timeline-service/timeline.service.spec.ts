import {TestBed, inject} from '@angular/core/testing';

import {TimelineService} from './timeline.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EventData} from '../event-data';

describe('TimelineService', () => {
  let timelineService: TimelineService;
  let httpMock: HttpTestingController;

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

  it('should perform http get', inject([TimelineService], (service: TimelineService) => {
    service.get().subscribe((events: EventData[]) => {
      console.log('gah');
      expect(events[0].keywords[0]).toBe('keyword');
    });

    const req = httpMock.expectOne('http://localhost:3000/timeline');
    req.flush([{keywords: ['keyword']}]);
    httpMock.verify();
  }));
});


