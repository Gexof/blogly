import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { Blog } from './types/blog';
import { Author } from './types/author';
import { AuthorService } from './services/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];
  authors: Author[] = [];

  constructor(
    private blogService: BlogService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.getBlogs();
    this.getAuthors();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe({
      next: (res) => {
        this.blogs = res;
      },
    });
  }

  getAuthors() {
    // this.authorService.getAuthors().subscribe({
    //   next: (res) => {
    //     this.authors = res;
    //   },
    // });
  }

  getAuthorById(authorId: number) {
    this.authorService.getAuthorById(authorId).subscribe({
      next: (res) => {},
    });
  }
}
