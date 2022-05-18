import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderMenuService } from '../order-menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  tax = 0;

  @Output() checkoutClicked = new EventEmitter();

  constructor(private orderMenuService: OrderMenuService) { }

  ngOnInit(): void {
    this.orderMenuService.getCart().subscribe(items => this.cartItems = items);
    this.orderMenuService.getTaxes().subscribe(items => this.tax = items.value);
  }

  getSubTotal(cartItems) {
    return cartItems.reduce((acc, prod) => acc += (prod.price * prod.num), 0);
  }

  getTotal(cartItems) {
    return this.getSubTotal(cartItems) + ((this.getSubTotal(cartItems) * this.tax)/100);
  }

  addProduct(item) {
    this.orderMenuService.addProductToCart(item);
  }

  removeProduct(item) {
    this.orderMenuService.removeProduct(item);
  }

  checkout(cartItems) {
    this.checkoutClicked.emit(cartItems);
    this.cartItems = [];
    this.orderMenuService.clearCart();
  }

}
