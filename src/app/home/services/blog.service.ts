import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../types/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('http://localhost:3000/blogs');
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`http://localhost:3000/blogs/${id}`);
  }
}
