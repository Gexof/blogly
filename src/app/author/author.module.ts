import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { AuthoerDetailComponent } from './components/authoer-detail/authoer-detail.component';
import { AuthorService } from '../shared/services/author.service';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [AuthorComponent, AuthoerDetailComponent],
  imports: [CommonModule, AuthorRoutingModule, TabViewModule],
})
export class AuthorModule {
  constructor(private authorService: AuthorService) {}
}
