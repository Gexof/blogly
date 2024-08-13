import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../../home/types/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:3000/authors');
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`http://localhost:3000/authors/${id}`);
  }
}
