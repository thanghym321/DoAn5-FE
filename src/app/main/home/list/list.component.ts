import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit {

  public list_category:any
  public category:any
  public list_product:any

  constructor(injector: Injector, private _cart: CartService, private _send: SendService) {
    super(injector)
  }

  public _addToCart(item: any) {
    this._cart.addToCart(item);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giỏ hàng thành công');
  }

  ngOnInit(): void {

    //getbycategory
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Products/getbycategory?Category_Id='+id).subscribe(res => {
      this.list_product = res;
      console.log(this.list_product)
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
    });

    //get category by id
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Categories/getbyid/'+id).subscribe(res => {
      this.category = res;
      console.log(this.category)
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
    });

    //Category
    this._api.get('/api/Categories/get').subscribe(res => {
      this.list_category = res;
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
  }

}
