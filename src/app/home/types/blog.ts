import { Comment } from './comment';

export interface Blog {
  id?: number;
  title: string;
  content: string;
  date: string;
  comments: Comment[];
  commentCount: string;
  authorId: number;
  coverImage: string;
  authorName: string;
  authorImage: string;
}
