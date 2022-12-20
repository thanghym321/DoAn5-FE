import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BaseComponent implements OnInit {

  public list_product:any;


  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit(): void {
    //Product
    this._api.get('/api/Products/get').subscribe(res => {
      this.list_product = res;
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
  }


}
