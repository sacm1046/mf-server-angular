import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule {
  @Input() text: string = ""
}
