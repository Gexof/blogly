import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadPhotoService {
  private http = inject(HttpClient);

  constructor() {}

  uploadPhoto(formData: FormData) {
    return this.http.post(
      'https://api.cloudinary.com/v1_1/deuypnqtq/image/upload',
      formData
    );
  }
}
