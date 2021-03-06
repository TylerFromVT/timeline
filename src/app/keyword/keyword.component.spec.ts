import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordComponent } from './keyword.component';
import {FormsModule} from '@angular/forms';

describe('KeywordComponent', () => {
  let component: KeywordComponent;
  let fixture: ComponentFixture<KeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ KeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
