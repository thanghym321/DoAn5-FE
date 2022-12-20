import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.route';



@NgModule({
  declarations: [
    MainComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
