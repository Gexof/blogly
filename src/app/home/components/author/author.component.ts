import { Component, Input } from '@angular/core';
import { Author } from '../../types/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  @Input({ required: true }) author?: Author;
}
