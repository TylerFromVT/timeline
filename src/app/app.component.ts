import {Component, OnInit} from '@angular/core';
import {Timeline} from './timeline';
import {TimelineService} from './timeline-service/timeline.service';
import {TimelineEvent} from './timeline-event';
import {EventData} from './event-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  timelineData: EventData[];
  enabledKeywords: string[];

  constructor(private timelineService: TimelineService) {
  }

  ngOnInit(): void {
    this.timelineService.get().subscribe(timelineData => {
      this.timelineData = timelineData;
    });
  }

  addEvent(eventData: EventData) {
    this.timelineService.add(eventData).subscribe(timelineData => {
      this.timelineData = timelineData;
    });
  }

  updateEvent(event: TimelineEvent) {
    this.timelineService.update(event).subscribe(timelineData => {
      this.timelineData = timelineData;
    });
  }

  deleteEvent(event: TimelineEvent) {
    this.timelineService.delete(event).subscribe(timelineData => {
      this.timelineData = timelineData;
    });
  }

  onUpdateToEnabledKeywords(enabledKeywords: Set<string>) {
    // Note we generate a new array of enabledKeywords so Angular notices it's changed
    this.enabledKeywords = Array.from(enabledKeywords);
  }
}
