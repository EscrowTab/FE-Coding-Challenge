import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFPage, PDFDocument } from 'pdf-lib';

@Component({
  selector: 'app-move-pdf-page',
  templateUrl: './move-pdf-page.component.html',
  styleUrls: ['./move-pdf-page.component.scss'],
})
export class MovePdfPageComponent {
  public startPageFormControl = new FormControl(0);
  public newLocationFormControl = new FormControl(0);
  public pagesToMove = new FormControl(0);

  constructor(
    public dialogRef: MatDialogRef<MovePdfPageComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { pdfPages: PDFPage[]; pdfDocument: PDFDocument }
  ) {}

  public get pageCount(): number {
    return this.data?.pdfPages?.length;
  }

  public get newLocation(): number {
    return this.newLocationFormControl.value as number;
  }

  public getPageList(): string {
    const startPage = this.startPageFormControl.value as number;
    const totalPages = this.pagesToMove.value as number;
    let pageList: number[] = [];
    // TODO check to make sure total pages is within legal ranges
    if (totalPages < this.pageCount) {
      const sum = totalPages + startPage;
      for (var i = startPage; i < sum; i++) {
        pageList.push(i);
      }
    }

    return pageList.join(',');
  }

  public close(confirmDelete = false) {
    if (!confirmDelete) {
      this.dialogRef.close();
    }

    const pages = this.data.pdfPages;
    const startPage = this.startPageFormControl.value as number;
    const totalPages = this.pagesToMove.value as number;
    const newLocation = this.newLocationFormControl.value as number;
    const pagesToMove = [];

    // TODO check to make sure total pages is within legal ranges
    if (totalPages < this.pageCount) {
      const sum = totalPages + startPage;
      for (var i = startPage; i < sum; i++) {
        pagesToMove.push(pages[i]);
      }

      // insert new pages in new position
        this.data.pdfDocument.insertPage(newLocation, ...pagesToMove);

      //remove pages from previous position
      for (var i = startPage; i < sum; i++) {
        this.data.pdfDocument.removePage(i);
      }

      this.data.pdfDocument.saveAsBase64().then(savedData => {
        const imageBlob = this.dataURItoBlob(savedData);
        const newFile = new File([imageBlob], 'modified.pdf', { type: 'application/pdf' });
        this.dialogRef.close({newFile});
      });
    }
  }

  dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
 }
}
