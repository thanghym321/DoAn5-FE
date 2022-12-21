import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { SendService } from 'src/app/core/services/send.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  public list: any;
  public tTong: any;
  public sosanphams:any=0;
  public list_category:any;

  constructor(injector: Injector,private _send: SendService, private _cart: CartService) {
    super(injector)
   }

  public Xoa(id: any) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
      var index = this.list.findIndex((x: any) => x.id == id);
      if (index >= 0) {
        this.list.splice(index, 1);
        this.tTong = this.list.reduce((sum:any, x:any) => sum + x.price  * x.quantity, 0);
      }
    }
  }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('cart') || '[]');
    this.tTong = this.list.reduce((sum:any, x:any) => sum +  x.price * x.quantity, 0);

    this.sosanphams=this._cart.getItems().length;
    this._send.objs.subscribe((res: any) => {
      if(res) {
        this.sosanphams=res;
      }
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
