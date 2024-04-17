import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'basic-text-page',
  templateUrl: './basic-text-page.component.html',
  styleUrls: ['./basic-text-page.component.css']
})
export class BasicTextPageComponent {
  @Input() filePath: string = '';
  fileContent: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFileContent();
  }

  loadFileContent() {
    this.http.get(this.filePath, { responseType: 'text' })
      .subscribe(
        data => {
          this.fileContent = data;
        },
        error => {
          console.error('Error loading file:', error);
        }
      );
  }

}