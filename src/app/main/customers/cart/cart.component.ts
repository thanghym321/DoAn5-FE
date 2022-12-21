import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public list: any;
  public total: any;

  constructor() { }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('cart') || '[]');
    this.total = this.list.reduce((sum:any, x:any) => sum +  x.price * x.quantity, 0);
  }

  public Giam(id: any) {
    var index = this.list.findIndex((x: any) => x.id == id);
    if (index >= 0 && this.list[index].quantity >= 1) {
      this.list[index].quantity -= 1;
      this.total = this.list.reduce((sum:any, x:any) => sum + x.price  * x.quantity, 0);
    }
  }
  public Tang(id: any) {
    var index = this.list.findIndex((x: any) => x.id == id);
    if (index >= 0) {
      this.list[index].quantity += 1;
      this.total = this.list.reduce((sum:any, x:any) => sum + x.price  * x.quantity, 0);
    }
  }
  public XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart','');
        this.list = null;
        this.total = 0;
    }
  }
  public UpdateCart() {
    localStorage.setItem('cart', JSON.stringify(this.list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
  }
  public Xoa(id: any) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
      var index = this.list.findIndex((x: any) => x.id == id);
      if (index >= 0) {
        this.list.splice(index, 1);
        this.total = this.list.reduce((sum:any, x:any) => sum + x.price  * x.quantity, 0);
      }
    }
  }

}
