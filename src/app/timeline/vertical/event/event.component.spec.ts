import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {EventData} from '../../../event-data';
import {DebugElement} from '@angular/core';
import {EventComponentPageObject} from './event.component.po';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  let po: EventComponentPageObject;
  let eventData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    eventData = new EventData();
    eventData.date = 'October 1, 1962';

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;

    component.eventData = eventData;

    po = new EventComponentPageObject(fixture);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('date field', () => {

    it('should default to having the readonly attribute', () => {
      expect(po.dateHasReadOnlyAttribute()).toBeTruthy();
    });

    it('should default to having the readonly class', () => {
      expect(po.dateHasReadOnlyClass()).toBeTruthy();
    });

    describe('click in it', () => {

      beforeEach(() => {
        po.clickInDateField();
      });

      it('should remove readonly attribute', () => {
        expect(po.dateHasReadOnlyAttribute()).toBeFalsy();
      });

      it('should remove readonly class', () => {
        expect(po.dateHasReadOnlyClass()).toBeFalsy();
      });

      describe('now blur', () => {

        beforeEach(() => {
          po.blurDateField();
        });

        it('should add readonly attribute', () => {
          expect(po.dateHasReadOnlyAttribute()).toBeTruthy();
        });

        it('should add readonly class', () => {
          expect(po.dateHasReadOnlyClass()).toBeTruthy();
        });
      });
    });
  });

  describe('title field', () => {

    it('should default to having the readonly attribute', () => {
      expect(po.titleHasReadOnlyAttribute()).toBeTruthy();
    });

    it('should default to having the readonly class', () => {
      expect(po.titleHasReadOnlyClass()).toBeTruthy();
    });

    describe('click in it', () => {

      beforeEach(() => {
        po.clickInTitleField();
      });

      it('should remove readonly attribute', () => {
        expect(po.titleHasReadOnlyAttribute()).toBeFalsy();
      });

      it('should remove readonly class', () => {
        expect(po.titleHasReadOnlyClass()).toBeFalsy();
      });

      describe('now blur', () => {

        beforeEach(() => {
          po.blurTitleField();
        });

        it('should add readonly attribute', () => {
          expect(po.titleHasReadOnlyAttribute()).toBeTruthy();
        });

        it('should add readonly class', () => {
          expect(po.titleHasReadOnlyClass()).toBeTruthy();
        });

      });
    });
  });

  describe('details field', () => {

    it('should default to having the readonly attribute', () => {
      expect(po.detailsHasReadOnlyAttribute()).toBeTruthy();
    });

    it('should default to having the readonly class', () => {
      expect(po.detailsHasReadOnlyClass()).toBeTruthy();
    });

    describe('click in it', () => {

      beforeEach(() => {
        po.clickInDetailsField();
      });

      it('should remove readonly attribute', () => {
        expect(po.detailsHasReadOnlyAttribute()).toBeFalsy();
      });

      it('should remove readonly class', () => {
        expect(po.detailsHasReadOnlyClass()).toBeFalsy();
      });

      describe('now blur', () => {

        beforeEach(() => {
          po.blurDetailsField();
        });

        it('should add readonly attribute', () => {
          expect(po.detailsHasReadOnlyAttribute()).toBeTruthy();
        });

        it('should add readonly class', () => {
          expect(po.detailsHasReadOnlyClass()).toBeTruthy();
        });

      });
    });
  });

  describe('keywords field', () => {

    it('should default to having the readonly attribute', () => {
      expect(po.keywordsHasReadOnlyAttribute()).toBeTruthy();
    });

    it('should default to having the readonly class', () => {
      expect(po.keywordsHasReadOnlyClass()).toBeTruthy();
    });

    describe('click in it', () => {

      beforeEach(() => {
        po.clickInKeywordsField();
      });

      it('should remove readonly attribute', () => {
        expect(po.keywordsHasReadOnlyAttribute()).toBeFalsy();
      });

      it('should remove readonly class', () => {
        expect(po.keywordsHasReadOnlyClass()).toBeFalsy();
      });

      describe('now blur', () => {

        beforeEach(() => {
          po.blurKeywordsField();
        });

        it('should add readonly attribute', () => {
          expect(po.keywordsHasReadOnlyAttribute()).toBeTruthy();
        });

        it('should add readonly class', () => {
          expect(po.keywordsHasReadOnlyClass()).toBeTruthy();
        });
      });
    });
  });
});
