import {Component, OnInit} from '@angular/core';
import {TimelineService} from './timeline-service/timeline.service';
import {EventData} from './event-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  events: EventData[];
  enabledKeywords: string[];

  constructor(private timelineService: TimelineService) {
  }

  ngOnInit(): void {
    this.timelineService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  addEvent(eventData: EventData) {
    this.timelineService.addEvent(eventData).subscribe(events => {
      this.events = events;
    });
  }

  updateEvent(eventData: EventData) {
    this.timelineService.updateEvent(eventData).subscribe(events => {
      this.events = events;
    });
  }

  deleteEvent(eventData: EventData) {
    this.timelineService.deleteEvent(eventData.id).subscribe(events => {
      this.events = events;
    });
  }

  onUpdateToEnabledKeywords(enabledKeywords: Set<string>) {
    // Note we generate a new array of enabledKeywords so Angular notices it's changed
    this.enabledKeywords = Array.from(enabledKeywords);
  }
}
