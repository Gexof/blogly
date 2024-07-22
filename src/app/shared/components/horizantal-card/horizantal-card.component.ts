import { Component, Input } from '@angular/core';
import { Blog } from '../../../home/types/blog';

@Component({
  selector: 'app-horizantal-card',
  templateUrl: './horizantal-card.component.html',
  styleUrl: './horizantal-card.component.css',
})
export class HorizantalCardComponent {
  @Input() blog?: Blog;
  @Input() authorName?: string;
  @Input() authorImg?: string;
}
