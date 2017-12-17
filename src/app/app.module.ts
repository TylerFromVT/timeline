import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/vertical/timeline.component';
import { TimelineService } from './timeline-service/timeline.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { KeywordComponent } from './keyword/keyword.component';
import { EventComponent } from './timeline/vertical/event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {ErrorService} from './error-service/error-service';
import { HorizontalTimelineComponent } from './timeline/horizontal/horizontal-timeline/horizontal-timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    KeywordComponent,
    EventComponent,
    AddEventComponent,
    ErrorMessageComponent,
    HorizontalTimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TimelineService,
    ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
