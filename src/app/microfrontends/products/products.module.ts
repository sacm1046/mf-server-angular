import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
