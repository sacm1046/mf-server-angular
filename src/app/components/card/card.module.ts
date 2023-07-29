import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CardComponent }];

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
