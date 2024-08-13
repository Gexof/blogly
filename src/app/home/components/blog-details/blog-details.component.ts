import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../types/blog';
import { BlogService } from '../../services/blog.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export default class BlogDetailsComponent implements OnInit {
  blog?: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.blogService.getBlogById(+id).subscribe({
      next: (res) => {
        console.log(res);
        this.blog = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getAuthor(id: number) {
    this.authorService.getAuthorById(1).subscribe({
      next: (res) => {
        const author = res;
        const authorImg = author.picture;
        return authorImg;
      },
    });
  }
}
