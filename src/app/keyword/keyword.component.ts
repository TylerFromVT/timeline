import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {TimelineEvent} from '../timeline-event';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit, OnChanges {

  @Input() timelineData: any[];
  @Output() onKeywordUpdate = new EventEmitter<Set<string>>();

  keywords: Set<string>;
  private enabledKeywords = new Set<string>();

  constructor() {
    this.keywords = new Set();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['timelineData'].currentValue) {
      this.timelineData = changes['timelineData'].currentValue;
      for (const x of this.timelineData) {
        for (const keyword of x.keywords) {
          this.keywords.add(keyword);
        }
      }
    }
    }

  onClick(keyword: string, checked: boolean) {
    if (checked) {
      this.enabledKeywords.add(keyword);
    } else {
      this.enabledKeywords.delete(keyword);
    }
    this.onKeywordUpdate.emit(this.enabledKeywords);
  }


}
