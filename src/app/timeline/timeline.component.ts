import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
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
  @Output() emitEvent = new EventEmitter<TimelineEvent>();
  @Output() emitDeleteEvent = new EventEmitter<TimelineEvent>();

  timeline: Timeline;

  constructor() {}

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
      console.log('Building timeline and filtering');
      console.log(this.timelineData);
      console.log(this.enabledKeywords);
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

  onDeleteEvent(event: TimelineEvent) {
    this.emitDeleteEvent.emit(event);
  }

  onUpdateEvent(event: TimelineEvent) {
    this.emitEvent.emit(event);
  }
}
