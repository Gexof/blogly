import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../types/blog';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.baseApi}/posts`);
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${environment.baseApi}/posts/${id}`);
  }
}
