import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../types/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input() comment?: Comment;
}
