import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  private _selectedFile: any;

  public set selectedFile(pdfFile) {
    this._selectedFile = pdfFile;
  }

  public get selectedFile(): any {
    return this._selectedFile;
  }
}
