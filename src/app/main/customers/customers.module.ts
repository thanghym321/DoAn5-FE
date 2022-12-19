import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';


@NgModule({
  declarations: [
    // CartComponent,
    // ThanhtoanComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: 'cart', component: CartComponent },
      // { path: 'thanhtoan', component: ThanhtoanComponent }
    ])
  ]
})
export class CustomersModule { }
