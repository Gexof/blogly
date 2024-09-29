import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css',
})
export class AddBlogComponent {
  form = new FormGroup({
    coverImage: new FormControl('', { validators: [Validators.required] }),
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    content: new FormControl('', {
      validators: [Validators.required, Validators.minLength(250)],
    }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
