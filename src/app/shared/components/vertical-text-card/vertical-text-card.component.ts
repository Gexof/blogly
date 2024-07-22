import { Component, Input } from '@angular/core';
import { Blog } from '../../../home/types/blog';

@Component({
  selector: 'app-vertical-text-card',
  templateUrl: './vertical-text-card.component.html',
  styleUrl: './vertical-text-card.component.css',
})
export class VerticalTextCardComponent {
  @Input() blog?: Blog;
  @Input() authorName?: string;
  @Input() authorImg?: string;
}
