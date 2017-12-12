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


  onDeleteEvent(event: TimelineEvent) {
    this.emitDeleteEvent.emit(event);
  }

  onUpdateEvent(event: TimelineEvent) {
    this.emitEvent.emit(event);
  }
}
