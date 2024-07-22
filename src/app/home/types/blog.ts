export interface Comment {
  id: number;
  author: string;
  text: string;
}

export interface Blog {
  id?: number;
  title: string;
  body: string;
  date: string;
  comments: Comment[];
  authorId: number;
  tags: string[];
  coverImage: string;
  bodyImages: string[];
}
