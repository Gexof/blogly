import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import BlogDetailsComponent from './components/blog-details/blog-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
