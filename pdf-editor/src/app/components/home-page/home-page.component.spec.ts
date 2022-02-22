import { PdfUploadComponent } from './../pdf-upload/pdf-upload.component';
import { PdfEditComponent } from './../pdf-edit/pdf-edit.component';
import { HomePageComponent } from './home-page.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MatButtonModule} from '@angular/material/button';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let spectator: Spectator<HomePageComponent>;

  const createComponent = createComponentFactory({
    component: HomePageComponent,
    declarations: [
      PdfEditComponent,
      PdfUploadComponent,
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
