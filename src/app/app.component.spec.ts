import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimelineComponent} from './timeline/timeline.component';
import {TimelineService} from './timeline.service';
import {AddEventComponent} from './add-event/add-event.component';
import {FormsModule} from '@angular/forms';
import {KeywordComponent} from './keyword/keyword.component';
import {EventComponent} from './timeline/event/event.component';
import {HttpClientModule} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
        EventComponent
      ],
      providers: [
        TimelineService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('DOM Structure', () => {

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
      spyOn(appComponent.timelineService, 'get').and.returnValue({subscribe() {}});
      fixture.detectChanges();
      expect(appComponent.timelineService.get).toHaveBeenCalled();
    }));

    it('should setup timelineData', async(() => {
      const mockTimelineData = [{keywords: ['Keyword']}];
      spyOn(appComponent.timelineService, 'get').and.returnValue(Observable.of(mockTimelineData));
      fixture.detectChanges();
      expect(appComponent.timelineData).toBeTruthy();
    }));
  });

});
