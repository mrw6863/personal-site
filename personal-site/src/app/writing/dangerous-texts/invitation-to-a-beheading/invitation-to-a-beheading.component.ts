import { Component } from '@angular/core';
import { BasicTextPageComponent } from '../../../components/basic-text-page/basic-text-page.component';
import "./markdown-files/invitation-to-a-beheading.md"

@Component({
  selector: 'invitation-to-a-beheading',
  templateUrl: './invitation-to-a-beheading.component.html',
  styleUrls: ['./invitation-to-a-beheading.component.scss']
})
export class InvitationToABeheadingComponent {
  filePath="./markdown-files/invitation-to-a-beheading.md"
  title = 'invitation-to-a-beheading';
}