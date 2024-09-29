import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import BlogDetailsComponent from './components/blog-details/blog-details.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'new-blog', component: AddBlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
