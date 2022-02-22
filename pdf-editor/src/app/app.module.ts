import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PdfUploadComponent } from './components/pdf-upload/pdf-upload.component';
import { PdfEditComponent } from './components/pdf-edit/pdf-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletePdfPageComponent } from './modals/delete-pdf-page/delete-pdf-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovePdfPageComponent } from './modals/move-pdf-page/move-pdf-page.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  DragDropModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PdfUploadComponent,
    PdfEditComponent,
    DeletePdfPageComponent,
    MovePdfPageComponent
  ],
  imports: [
    NgxExtendedPdfViewerModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MATERIAL_MODULES,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FileUploadModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MATERIAL_MODULES,
    FlexLayoutModule,
  ]
})
export class AppModule { }
