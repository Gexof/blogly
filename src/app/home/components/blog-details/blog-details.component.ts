import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../types/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export default class BlogDetailsComponent implements OnInit {
  blog?: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
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
}
