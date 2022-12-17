import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // { path: 'detail/:id', component: DetailComponent },
      { path: 'index', component: IndexComponent },
      // { path: 'cuahang', component: CuahangComponent },
      // { path: 'danhmuc/:id', component: DanhmucComponent }
    ])
  ]
})
export class HomeModule { }
