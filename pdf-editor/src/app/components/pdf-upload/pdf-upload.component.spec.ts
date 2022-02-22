import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { PdfUploadComponent } from './pdf-upload.component';

describe('PdfUploadComponent', () => {
  let component: PdfUploadComponent;
  let spectator: Spectator<PdfUploadComponent>;

  const createComponent = createComponentFactory({
    component: PdfUploadComponent,
    declarations: [
    ],
    imports: [
      MatButtonModule,
      MatCardModule,
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
