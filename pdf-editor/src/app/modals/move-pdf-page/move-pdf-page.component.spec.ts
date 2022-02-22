import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePdfPageComponent } from './move-pdf-page.component';

describe('MovePdfPageComponent', () => {
  let component: MovePdfPageComponent;
  let fixture: ComponentFixture<MovePdfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovePdfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovePdfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept the first page to be moved', () => {

  });

  it('should allow a range of pages to be moved', () => {

  });

  it('should accept a new place for pages to be moved', () => {

  });

  it('should return a new array of PDF pages, ordered as requsted, upon close', () => {

  });
});
