import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  public list_category:any;

  constructor(injector: Injector) {
    super(injector)
   }

  ngOnInit(): void {

     //Category
     this._api.get('/api/Categories/get').subscribe(res => {
      this.list_category = res;
      console.log(this.list_category)
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
  }

}
