import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-date-save',
  templateUrl: './card-date-save.component.html',
  styleUrl: './card-date-save.component.css',
})
export class CardDateSaveComponent {
  @Input({ required: true }) date?: string;
  @Input({ required: true }) comments?: string;
}
