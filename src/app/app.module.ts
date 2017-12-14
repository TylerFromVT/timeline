import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineService } from './timeline-service/timeline.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { KeywordComponent } from './keyword/keyword.component';
import { EventComponent } from './timeline/event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import {ErrorService} from './error-service/error-service';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    KeywordComponent,
    EventComponent,
    AddEventComponent,
    ErrorMessageComponent
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
