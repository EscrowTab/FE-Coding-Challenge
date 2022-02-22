import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { PdfEditComponent } from './pdf-edit.component';

describe('PdfEditComponent', () => {
  let component: PdfEditComponent;
  let spectator: Spectator<PdfEditComponent>;

  const createComponent = createComponentFactory({
    component: PdfEditComponent,
    declarations: [
    ],
    imports: [
      MatButtonModule,
    ]
  })

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
