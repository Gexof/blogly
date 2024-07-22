import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HeadingComponent } from './components/heading/heading.component';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [HomeComponent, HeadingComponent, AuthorComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
