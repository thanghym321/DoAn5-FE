import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {


  // @Input() product_Name:string;
  // @Input() Price:any;
  // @Input() category_Name:any;




  public list_slide:any;
  public list_category:any;
  public list_product:any;

  constructor( injector: Injector, private _cart: CartService, private _send: SendService) {
    super(injector);
   }

  public _addToCart(item: any) {
    this._cart.addToCart(item);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giỏ hàng thành công');
  }

  ngOnInit(): void {

    // //timkiem
    // this._api.get('/api/Products/timkiem'+'?category_Name=').subscribe(res => {
    //   this.list_product = res;
    //   console.log(this.list_product)
    //   setTimeout(() => {
    //     this.loadScripts('/assets/js/main.js');
    //   });
    // });


    //Slide
    this._api.get('/api/Slides/get').subscribe(res => {
      this.list_slide = res;
      // debugger;
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });

    //Category
    this._api.get('/api/Categories/get').subscribe(res => {
      this.list_category = res;
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
