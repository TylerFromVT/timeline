import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';
import { Timeline } from '../timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private timelineService: TimelineService) {
    console.debug('Timeline Component: constructor');
    this.enabledKeywords = new Set();
  }

  timeline: Timeline;
  private enabledKeywords: Set<string>;

  ngOnInit() {
    console.debug('Timeline Component: OnInit');
    this.timelineService.getTimeline().subscribe(gah => {
      this.timeline = new Timeline(gah);});
  }

  onClick(keyword: string, checked: boolean) {
    if (checked) {
      this.enabledKeywords.add(keyword);
    } else {
      this.enabledKeywords.delete(keyword);
    }

    this.timeline.filter(this.enabledKeywords);
  }

  onAddEvent(date, title, details) {
    console.log('Adding Event');
    console.log('Date: ' + date);
    console.log('Title: ' + title);
    console.log('Details: ' + details);
    const keywords = ['Overman'];
    this.timelineService.addEvent(date, title, details, keywords).subscribe(gah => {
      console.log(JSON.stringify(gah));
      this.timeline = new Timeline(gah);
      this.timeline.filter(this.enabledKeywords);
    });
  }

}
