import {Component, OnInit, Input, ElementRef} from '@angular/core';
import { TimelineService } from '../timeline.service';
import { Timeline } from '../timeline';
import {TimelineEvent} from '../timeline-event';

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
    this.enabledKeywords.add('Brown');
    this.timelineService.getTimeline().subscribe(gah => {
      console.log('ngOnInit callback');
      this.timeline = new Timeline(gah);
      this.timeline.filter(this.enabledKeywords);
    });
  }

  onClick(keyword: string, checked: boolean) {
    if (checked) {
      this.enabledKeywords.add(keyword);
    } else {
      this.enabledKeywords.delete(keyword);
    }
    this.timeline.filter(this.enabledKeywords);
  }

  onAddEvent(date, title, details, keywords) {
    console.log('onAddEvent');
    console.log(keywords);
    const keywordList = keywords.split(',');
    console.log(keywordList);
    this.timelineService.addEvent(date, title, details, keywordList).subscribe(gah => {
      console.log(JSON.stringify(gah));
      this.timeline = new Timeline(gah);
      this.timeline.filter(this.enabledKeywords);
    });
  }


  onEditDate(element: any, timelineEvent: TimelineEvent) {
    timelineEvent.dateIsReadOnly = false;
    timelineEvent.showSave = true;
    element.removeAttribute('readonly');
  }

  onEditTitle(element: any, timelineEvent: TimelineEvent) {
    timelineEvent.titleIsReadOnly = false;
    timelineEvent.showSave = true;
    element.removeAttribute('readonly');
  }

  onEditDetails(element: any, timelineEvent: TimelineEvent) {
    timelineEvent.detailsAreReadOnly = false;
    timelineEvent.showSave = true;
    element.removeAttribute('readonly');
  }

  onSaveEvent(element: any, timelineEvent: TimelineEvent) {
    this.timelineService.update(timelineEvent).subscribe(gah => {
      console.log('OnSaveEvent callback');
      console.log(gah);
      this.timeline = new Timeline(gah);
      this.timeline.filter(this.enabledKeywords);
    });
    element.setAttribute('readonly', '');
  }

  onDeleteEvent(timelineEvent: TimelineEvent) {
    this.timelineService.delete(timelineEvent).subscribe(gah => {
      console.log('OnDeleteEvent callback');
      console.log(gah);
      this.timeline = new Timeline(gah);
      this.timeline.filter(this.enabledKeywords);
    });
  }
}
