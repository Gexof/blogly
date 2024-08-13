import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthoerDetailComponent } from './components/authoer-detail/authoer-detail.component';
import { AuthorComponent } from './author.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorComponent,
  },
  {
    path: ':id',
    component: AuthoerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
