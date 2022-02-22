import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFPage, PDFDocument } from 'pdf-lib';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-pdf-page',
  templateUrl: './delete-pdf-page.component.html',
  styleUrls: ['./delete-pdf-page.component.scss']
})
export class DeletePdfPageComponent {

  public startPageFormControl = new FormControl(0);
  public pagesToDelete = new FormControl(0);

  constructor(public dialogRef: MatDialogRef<DeletePdfPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {pdfPages: PDFPage []; pdfDocument: PDFDocument}) {
     }

  public get pageCount(): number {
    return this.data?.pdfPages?.length;
  }

  public getDeletePages(): string {
    const startPage = this.startPageFormControl.value as number;
    const totalPages = this.pagesToDelete.value as number;
    let pageList: number [] = [];
    // TODO check to make sure total pages is within legal ranges
    if (totalPages < this.pageCount) {
      const sum = totalPages + startPage;
      for(var i = startPage; i < sum; i++) {
        pageList.push(i);
      }
    }

    return pageList.join(',');

  }

  public close(confirmDelete = false) {
    if (!confirmDelete) {
      this.dialogRef.close();
    }

    const startPage = this.startPageFormControl.value as number;
    const totalPages = this.pagesToDelete.value as number;

    const sum = totalPages + startPage;
    for(var i = startPage; i < sum; i++) {
      this.data.pdfDocument.removePage(i);
    }
    this.data.pdfDocument.saveAsBase64().then(savedData => {
      const imageBlob = this.dataURItoBlob(savedData);
      const newFile = new File([imageBlob], 'modified.pdf', { type: 'application/pdf' });
      this.dialogRef.close({newFile});
    });
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
