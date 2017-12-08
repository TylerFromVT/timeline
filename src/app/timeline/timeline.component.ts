import {Component, OnInit, Input, ElementRef, OnChanges, SimpleChanges} from '@angular/core';
import { TimelineService } from '../timeline.service';
import { Timeline } from '../timeline';
import {TimelineEvent} from '../timeline-event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnChanges {

  @Input() timelineData: any[];
  @Input() enabledKeywords: string[] = [];

  timeline: Timeline;

  constructor(private timelineService: TimelineService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('timelineComponent.ngOnChanges()');

    if (changes['timelineData']) {
      this.timelineData = changes['timelineData'].currentValue;
    }
    if (changes['enabledKeywords'] && changes['enabledKeywords'].currentValue) {
      this.enabledKeywords = changes['enabledKeywords'].currentValue;
    }

    if (this.timelineData && this.enabledKeywords) {
      this.timeline = new Timeline(this.timelineData);
      this.timeline.filter(this.enabledKeywords);
    }
  }



  // onAddEvent(date, title, details, keywords) {
  //   console.log('onAddEvent');
  //   console.log(keywords);
  //   const keywordList = keywords.split(',');
  //   console.log(keywordList);
  //   this.timelineService.addEvent(date, title, details, keywordList).subscribe(gah => {
  //     console.log(JSON.stringify(gah));
  //     this.timeline = new Timeline(gah);
  //     this.timeline.filter(this.enabledKeywords);
  //   });
  // }


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
