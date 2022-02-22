import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploadValidators } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.scss']
})
export class PdfUploadComponent  {
  public animation: boolean = false;
  public multiple: boolean = false;

  @Output() public fileUploaded: EventEmitter<File> = new EventEmitter<File>();

  private filesControl = new FormControl(null, [ FileUploadValidators.filesLimit(2), FileUploadValidators.accept(['application/pdf'])]);

  public demoForm = new FormGroup({
      files: this.filesControl
  });

  constructor() {
      this.filesControl.valueChanges.subscribe(files => {
        this.fileUploaded.emit(files[0]);
      });
  }

  public get selectedFile(): any {
    return this.filesControl.value;
  }

  public toggleStatus(): void {
      this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }

  public toggleMultiple() {
      this.multiple = !this.multiple;
  }

  public clear(): void {
      this.filesControl.setValue([]);
  }
}
