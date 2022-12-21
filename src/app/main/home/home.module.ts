import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'detail/:id', component: DetailComponent },
      { path: 'index', component: IndexComponent },
      { path: 'list/:id', component: ListComponent }
    ])
  ]
})
export class HomeModule { }
