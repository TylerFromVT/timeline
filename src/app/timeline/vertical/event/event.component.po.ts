import {ComponentFixture} from '@angular/core/testing';
import {EventComponent} from './event.component';
import {By} from '@angular/platform-browser';

export class EventComponentPageObject {

  fixture: ComponentFixture<EventComponent>;

  private readonly dateTag = '.date';
  private readonly titleTag = '.title';
  private readonly detailsTag = '.details';
  private readonly keywordsTag = '.keywords-input';

  private readonly clickEvent = 'click';
  private readonly blurEvent = 'blur';

  private readonly readOnlyAttribute = 'readonly';
  private readonly readOnlyClassname = 'readonly';

  constructor(fixture: ComponentFixture<EventComponent>) {
    this.fixture = fixture;
  }

  // +++++ Static Methods

  private static hasAttribute(element: any, attribute: string) {
    return element.hasAttribute(attribute);
  }

  private static hasClass(element: any, className: string) {
    return element.classList.contains(className);
  }

  // +++++ Date Field

  dateHasReadOnlyAttribute() {
    return EventComponentPageObject.hasAttribute(this.getDateNativeElement(), this.readOnlyAttribute);
  }

  dateHasReadOnlyClass() {
    return EventComponentPageObject.hasClass(this.getDateNativeElement(), this.readOnlyClassname);
  }

  clickInDateField() {
    const element = this.getDateElement();
    element.triggerEventHandler(this.clickEvent, element);
  }

  blurDateField() {
    const element = this.getDateElement();
    element.triggerEventHandler(this.blurEvent, element);
  }

  // +++++ Title Field

  titleHasReadOnlyAttribute() {
    return EventComponentPageObject.hasAttribute(this.getTitleNativeElement(), this.readOnlyAttribute);
  }

  titleHasReadOnlyClass() {
    return EventComponentPageObject.hasClass(this.getTitleNativeElement(), this.readOnlyClassname);
  }

  clickInTitleField() {
    const element = this.getTitleElement();
    element.triggerEventHandler(this.clickEvent, element);
  }

  blurTitleField() {
    const element = this.getTitleElement();
    element.triggerEventHandler(this.blurEvent, element);
  }

  // +++++ Details Field

  detailsHasReadOnlyAttribute() {
    return EventComponentPageObject.hasAttribute(this.getDetailsNativeElement(), this.readOnlyAttribute);
  }

  detailsHasReadOnlyClass() {
    return EventComponentPageObject.hasClass(this.getDetailsNativeElement(), this.readOnlyClassname);
  }

  clickInDetailsField() {
    const element = this.getDetailsElement();
    element.triggerEventHandler(this.clickEvent, element);
  }

  blurDetailsField() {
    const element = this.getDetailsElement();
    element.triggerEventHandler(this.blurEvent, element);
  }

  // +++++ Keywords Field

  keywordsHasReadOnlyAttribute() {
    return EventComponentPageObject.hasAttribute(this.getKeywordsNativeElement(), this.readOnlyAttribute);
  }

  keywordsHasReadOnlyClass() {
    return EventComponentPageObject.hasClass(this.getKeywordsNativeElement(), this.readOnlyClassname);
  }

  clickInKeywordsField() {
    const element = this.getKeywordsElement();
    element.triggerEventHandler(this.clickEvent, element);
  }

  blurKeywordsField() {
    const element = this.getKeywordsElement();
    element.triggerEventHandler(this.blurEvent, element);
  }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private getDateNativeElement() {
    return this.fixture.debugElement.query(By.css(this.dateTag)).nativeElement;
  }

  private getDateElement() {
    return this.fixture.debugElement.query(By.css(this.dateTag));
  }

  private getTitleNativeElement() {
    return this.fixture.debugElement.query(By.css(this.titleTag)).nativeElement;
  }

  private getTitleElement() {
    return this.fixture.debugElement.query(By.css(this.titleTag));
  }

  private getDetailsNativeElement() {
    return this.fixture.debugElement.query(By.css(this.detailsTag)).nativeElement;
  }

  private getDetailsElement() {
    return this.fixture.debugElement.query(By.css(this.detailsTag));
  }

  private getKeywordsNativeElement() {
    return this.fixture.debugElement.query(By.css(this.keywordsTag)).nativeElement;
  }

  private getKeywordsElement() {
    return this.fixture.debugElement.query(By.css(this.keywordsTag));
  }


}
