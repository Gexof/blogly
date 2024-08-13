import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeadingComponent } from './components/heading/heading.component';
import { AuthorComponent } from './components/author/author.component';
import BlogDetailsComponent from './components/blog-details/blog-details.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeadingComponent,
    AuthorComponent,
    BlogDetailsComponent,
    CommentComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
