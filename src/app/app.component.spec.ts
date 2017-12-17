import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimelineComponent} from './timeline/vertical/timeline.component';
import {TimelineService} from './timeline-service/timeline.service';
import {AddEventComponent} from './add-event/add-event.component';
import {FormsModule} from '@angular/forms';
import {KeywordComponent} from './keyword/keyword.component';
import {EventComponent} from './timeline/vertical/event/event.component';
import {HttpClientModule} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ErrorMessageComponent} from './error-message/error-message.component';
import {ErrorService} from './error-service/error-service';

describe('AppComponent', () => {

  let fixture, appComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TimelineComponent,
        AddEventComponent,
        KeywordComponent,
        EventComponent,
        ErrorMessageComponent
      ],
      providers: [
        TimelineService,
        ErrorService
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('DOM Structure', () => {

    it(`should have the correct title`, async(() => {
      const headerTag = fixture.debugElement.query(By.css('h1'));
      expect(headerTag.nativeElement.textContent).toBe('Timeline Playground');
    }));

    it(`should not have an error message element`, async(() => {
      const errorMessageComponent = fixture.debugElement.query(By.css('.error-message'));
      expect(errorMessageComponent).toBeFalsy();
    }));

    it(`should have a keyword component`, async(() => {
      const keywordComponent = fixture.debugElement.query(By.css('app-keyword'));
      expect(keywordComponent).toBeTruthy();
    }));

    it(`should have an add event component`, async(() => {
      const addEventComponent = fixture.debugElement.query(By.css('app-add-event'));
      expect(addEventComponent).toBeTruthy();
    }));

    it(`should have a timeline component`, async(() => {
      const appTimelineComponent = fixture.debugElement.query(By.css('app-timeline'));
      expect(appTimelineComponent).toBeTruthy();
    }));
  });

  describe('Component construction', () => {

    it('should inject a timelineService', () => {
      expect(appComponent.timelineService).toBeTruthy();
    });
  });

  describe('ngInit', () => {

    it('should call timeline service', async(() => {
      spyOn(appComponent.timelineService, 'getEvents').and.returnValue(Observable.of([]));
      fixture.detectChanges();
      expect(appComponent.timelineService.getEvents).toHaveBeenCalled();
    }));

    it('should setup events', async(() => {
      const mockTimelineData = [{keywords: ['Keyword']}];
      spyOn(appComponent.timelineService, 'getEvents').and.returnValue(Observable.of(mockTimelineData));
      fixture.detectChanges();
      expect(appComponent.events).toBeTruthy();
    }));

    it('should display errors from Error Service', async(() => {
      appComponent.timelineService.errorService.message = 'bad';
      spyOn(appComponent.timelineService, 'getEvents').and.returnValue(Observable.of([]));
      fixture.detectChanges();

      const errorMessageComponent = fixture.debugElement.query(By.css('app-error-message label'));
      expect(errorMessageComponent).toBeTruthy();
    }));
  });

});
