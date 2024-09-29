export interface Comment {
  id: number; // Unique identifier for the comment
  postId: number; // The ID of the post the comment belongs to
  content: string; // The content of the comment
  date: string; // The date when the comment was created
  authorId: number; // The ID of the user who made the comment
  authorName: string; // The name of the user who made the comment
  authorImage?: string; // (Optional) URL of the user's profile image
}
