import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../models/menuItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: MenuItem;
  @Output() productAdded = new EventEmitter();

  addProductToCart(product) {
    this.productAdded.emit(product);
  }

}
