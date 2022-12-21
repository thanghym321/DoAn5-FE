import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {

  public frmCustomer: FormGroup;
  public list: any;
  public total: any;

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('cart') || '[]');
    this.total = this.list.reduce((sum:any, x:any) => sum +  x.price * x.quantity, 0);

    this.frmCustomer = new FormGroup({
      'txt_name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'txt_phone': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'txt_email': new FormControl('', [Validators.email]),
      'txt_address': new FormControl('', [Validators.required]),
      'txt_note': new FormControl('')
    });
  }

  get name() {
    return this.frmCustomer.get('txt_name')!;
  }
  get address() {
    return this.frmCustomer.get('txt_address')!;
  }
  get phone() {
    return this.frmCustomer.get('txt_phone')!;
  }
  get email() {
    return this.frmCustomer.get('txt_email')!;
  }
  public onSubmit(val: any) {
    if (this.frmCustomer.invalid) {
      return;
    }
    debugger;
    let obj: any = {};
    obj.customer = {
      name: val.txt_name,
      address: val.txt_address,
      phone: val.txt_phone,
      email: val.txt_email
    };
    obj.list_detail = [];
    this.list.forEach((x: any) => {
      obj.list_detail.push({
        Product_Id: x.id,
        Amount: x.quantity,
        Price: x.price
      });
    });
    console.log(obj);
    debugger;
    this._api.post('/api/Export_Invoices/create', obj).subscribe(res => {
      if (res && res.data) {
        alert('Thêm dữ liệu thành công')
      } else {
        alert('Có lỗi')
      }
    });
  }

}
