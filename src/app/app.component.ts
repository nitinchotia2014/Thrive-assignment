import { Component } from '@angular/core';
import { OrderMenuService } from './order-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thrivenow';
  cartItems: any;
  viewModal = false;
  tax = 0;
  view = false;
  cart = [];

  constructor(private orderMenuService: OrderMenuService) {
    this.orderMenuService.getTaxes().subscribe(items => this.tax = items.value);
    this.orderMenuService.getCart().subscribe(items => this.cart = items);
    if(window.innerWidth > 712) this.view = true;
  }

  checkoutCart(items) {
    this.viewModal = true;
    this.cartItems = items;
  }

  getQuantity(cart) {
    return cart.reduce((acc, prod) => acc += prod.num, 0);
  }

  getSubTotal(cartItems) {
    return cartItems.reduce((acc, prod) => acc += (prod.price * prod.num), 0);
  }

  getTotal(cartItems) {
    return this.getSubTotal(cartItems) + ((this.getSubTotal(cartItems) * this.tax)/100);
  }

  closeModal() {
    this.viewModal = false;
    window.location.reload();
  }

  viewCart() {
    this.view = !this.view;
  }
}
