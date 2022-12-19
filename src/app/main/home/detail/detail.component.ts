import { Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {
   product:any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/Products/getbyid/'+id).subscribe(res => {
      this.product = res;
      console.log(this.product)
      debugger;
      setTimeout(() => {
        this.loadScripts('/assets/js/main.js');
      });
    });
    });
  }

}
