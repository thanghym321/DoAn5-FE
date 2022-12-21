import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {

  list_product:any;
   product:any;

  constructor(injector: Injector, private _cart: CartService, private _send: SendService) {
    super(injector);
  }

  public _addToCart(item: any) {
    this._cart.addToCart(item);
    this._send.addObjct(this._cart.getItems().length);
    alert('Đã thêm vào giỏ hàng thành công');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Products/getbyid/'+id).subscribe(res => {
      this.product = res;
      console.log(this.product)

      this._api.get('/api/Products/getbycategory?Category_Id='+res.category_Id).subscribe(res => {
        this.list_product = res;
        console.log(this.list_product)
      });

        setTimeout(() => {
          this.loadScripts('/assets/js/main.js');
        });
      });
    });
  }
}
