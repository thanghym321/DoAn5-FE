import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {

  public list_slide:any;
  public list_category:any;
  public list_product:any;

  constructor( injector: Injector) {
    super(injector);
   }


  ngOnInit(): void {

    //Slide
    this._api.get('/api/Slides/get').subscribe(res => {
      this.list_slide = res;
      console.log(this.list_slide)
      // debugger;
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });

    //Category
    this._api.get('/api/Categories/get').subscribe(res => {
      this.list_category = res;
      console.log(this.list_category)
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });

    //Product
    this._api.get('/api/Products/get').subscribe(res => {
      this.list_product = res;
      console.log(this.list_product)
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
  }

}
