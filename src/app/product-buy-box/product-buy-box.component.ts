import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-buy-box',
  templateUrl: './product-buy-box.component.html',
  styleUrls: ['./product-buy-box.component.css']
})
export class ProductBuyBoxComponent implements OnInit {
  @Input() img:string= '';
  @Input() name:string = '';
  @Input() price:string ='';
  constructor() {

   }

  ngOnInit(): void {
  }

}
