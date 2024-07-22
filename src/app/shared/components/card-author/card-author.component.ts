import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-author',
  templateUrl: './card-author.component.html',
  styleUrl: './card-author.component.css',
})
export class CardAuthorComponent {
  @Input({ required: true }) authorPic?: string;
  @Input({ required: true }) authorName?: string;
}
