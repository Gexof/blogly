import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { UploadPhotoService } from '../../services/upload-photo.service';
import { BlogService } from '../../services/blog.service';
import { NewBlog } from '../../types/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css',
})
export class AddBlogComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFile?: File | null = null;
  imagePreviewUrl?: string | null;

  private uploadPhotoService = inject(UploadPhotoService);
  private blogService = inject(BlogService);

  form = new FormGroup({
    coverImage: new FormControl('', { validators: [Validators.required] }),
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    content: new FormControl('', {
      validators: [Validators.required, Validators.minLength(250)],
    }),
  });

  ngOnInit() {}

  onSubmit() {
    this.uploadPhoto().subscribe({
      next: (replacedUrl) => {
        this.addBlog(replacedUrl).subscribe({
          next: (res) => {
            console.log('Post added successfully', res);
          },
          error: (err) => {
            console.error('Error adding post:', err);
          },
        });
      },
      error: (err) => {
        console.error('Error uploading photo:', err);
      },
    });
  }

  uploadPhoto(): Observable<string> {
    const fd = new FormData();
    fd.append('file', this.selectedFile!, this.selectedFile?.name);
    fd.append('upload_preset', 'blogly');

    return this.uploadPhotoService.uploadPhoto(fd).pipe(
      map((res: any) => {
        const imgUrl = res.secure_url;
        const replacedUrl = imgUrl.replace('upload/', 'upload/f_auto/'); // Apply transformation
        return replacedUrl; // Return the transformed URL
      })
    );
  }

  addBlog(coverImgUrl: string) {
    const newPost: NewBlog = {
      title: this.form.value.title!,
      content: this.form.value.content!,
      coverImage: coverImgUrl,
    };

    return this.blogService.addBlog(newPost);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0] as File | null;

    console.log(file);

    this.createImagePreview(file!);
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.createImagePreview(file!);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  removeImage() {
    this.selectedFile = null;
    this.imagePreviewUrl = '';
    this.form.get('coverImage')?.setValue('');
  }

  createImagePreview(file: File) {
    this.selectedFile = file;

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      this.imagePreviewUrl = e.target?.result as string;
    };
  }
}
