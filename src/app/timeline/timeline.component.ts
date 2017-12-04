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
  }

  private timeline: Timeline;

  ngOnInit() {
    console.debug('Timeline Component: OnInit');
    this.timelineService.getTimeline().subscribe(gah => {
      this.timeline = new Timeline(gah);
      console.log(JSON.stringify(gah));});
    // this.timeline = TimelineService.get();
  }

  onClick(keyword: string, checked: boolean) {
    this.timeline.filter(keyword, checked);
  }

}
