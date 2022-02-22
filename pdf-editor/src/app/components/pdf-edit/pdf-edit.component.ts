import { DeletePdfPageComponent } from './../../modals/delete-pdf-page/delete-pdf-page.component';
import { Component, Input } from '@angular/core';
import { PDFDocument, StandardFonts, rgb, PDFPage } from 'pdf-lib';
import {MatDialog} from '@angular/material/dialog';
import { MovePdfPageComponent } from '../../modals/move-pdf-page/move-pdf-page.component';

@Component({
  selector: 'app-pdf-edit',
  templateUrl: './pdf-edit.component.html',
  styleUrls: ['./pdf-edit.component.scss']
})
export class PdfEditComponent {
  private _pdfFile!: File;
  private _pdfDoc!: PDFDocument;
  private _pages: PDFPage[] = [];

  @Input() public set pdfFile(pdfFile: File) {
    this._pdfFile = pdfFile;
    if (!pdfFile) {
      return;
    }

    pdfFile.arrayBuffer().then(data => {
      this.loadPdfDocument(data);
    });
  }
  constructor(private _matDialog: MatDialog) { }

  public openDeletePageModal(): void {
    this._matDialog.open(DeletePdfPageComponent, {
      data: {
        pdfPages: this.pages,
        pdfDocument: this.pdfDoc
      }
    }).afterClosed().subscribe(data => {
      if (!data?.newFile) {
        return;
      }

      this.pdfFile = data.newFile;
    });
  }

  public openRearrangeModal(): void {
    this._matDialog.open(MovePdfPageComponent, {
      data: {
        pdfPages: this.pages,
        pdfDocument: this.pdfDoc
      }
    }).afterClosed().subscribe(data => {
      if (!data?.newFile) {
        return;
      }
      this.pdfFile = data.newFile;
    });
  }

  public createPdf(): void {
    // pdfDoc.saveAsBase64().then(pdfFile => this._pdfFile = new File([pdfFile], 'modified.pdf'));
  }

  public get pdfFile(): File {
    return this._pdfFile;
  }

  public get pdfDoc(): PDFDocument {
    return this._pdfDoc;
  }

  public get pages(): PDFPage[] {
    return this._pages;
  }

  public get pageSize() {
    if (this.pages.length < 1) {
      return;
    }

    const {width, height} = this._pages[0].getSize();
    return {width, height};
  }

  private loadPdfDocument(pdfBytes: ArrayBuffer): void {
    PDFDocument.load(pdfBytes).then(doc => {
      this.setPdfDocument(doc);
    });
  }

  private setPdfDocument(pdfDoc: PDFDocument): void {
    this._pdfDoc = pdfDoc;
    this._pdfDoc.embedFont(StandardFonts.Helvetica).then();
    this._pages = this._pdfDoc.getPages();
  }

}
