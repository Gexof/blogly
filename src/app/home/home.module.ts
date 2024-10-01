import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { CloudinaryModule } from '@cloudinary/ng';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeadingComponent } from './components/heading/heading.component';
import { AuthorComponent } from './components/author/author.component';
import BlogDetailsComponent from './components/blog-details/blog-details.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeadingComponent,
    AuthorComponent,
    BlogDetailsComponent,
    CommentComponent,
    AddBlogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    EditorModule,
    ReactiveFormsModule,
    CloudinaryModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
