import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePdfPageComponent } from './delete-pdf-page.component';

describe('DeletePdfPageComponent', () => {
  let component: DeletePdfPageComponent;
  let fixture: ComponentFixture<DeletePdfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePdfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePdfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept the starting page to be deleted', () => {

  });

  it('should allow a range of pages to be deleted', () => {

  });

  it('should tell the user exactly which pages will be removed', () => {

  });

  it('should close when the close button is clicked, ignoring changes', () => {

  });

  it('shuld close when save changes button is clicked, passing back an updated pdf page array', () => {

  });
});
