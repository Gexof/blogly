import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAuthorComponent } from './components/card-author/card-author.component';
import { CardDateSaveComponent } from './components/card-date-save/card-date-save.component';
import { VerticalTextCardComponent } from './components/vertical-text-card/vertical-text-card.component';
import { HorizantalCardComponent } from './components/horizantal-card/horizantal-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HorizantalCardComponent,
    CardAuthorComponent,
    CardDateSaveComponent,
    VerticalTextCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HorizantalCardComponent, VerticalTextCardComponent],
})
export class SharedModule {}
