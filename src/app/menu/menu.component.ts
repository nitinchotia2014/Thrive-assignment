import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, debounceTime, distinctUntilChanged, Observable, startWith, combineLatest, map } from 'rxjs';
import { MenuItem } from '../models/menuItem';
import { OrderMenuService } from '../order-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  filteredItems: Observable<any>;
  searchTerm: FormControl;
  searchTerm$: Observable<string>;
  noFilter = true;
  typeFilter = true;

  constructor(private orderMenuService: OrderMenuService) { }

  ngOnInit(): void {
    this.orderMenuService.getItems().subscribe(menu => {
      this.menuItems = menu;
      this.filteredItems = of(this.menuItems);
    })
    this.search();
  }

  filterCategory(event: any) {
    if(event.target.checked) {
      this.filteredItems = of(this.menuItems.filter(item => item.item_type === 'veg'));
    } else {
      this.filteredItems = of(this.menuItems.filter(item => item.item_type === 'non-veg'));
    }
    this.noFilter = false;
    this.search();
  }

  showAllItems(event: any) {
    if(this.noFilter) {
      this.filteredItems = of(this.menuItems);
    } else {
      this.filteredItems = of(this.menuItems.filter(item => item.item_type === 'veg'));
      this.typeFilter = true
    }
    this.search();
  }

  search() {
    this.searchTerm = new FormControl();
    this.searchTerm$ = this.searchTerm.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), startWith(''));

    this.filteredItems = combineLatest(this.filteredItems, this.searchTerm$).pipe(
      map(([items, search]) => items.filter((item: MenuItem) => (item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || (item.category.toLowerCase().indexOf(search.toLowerCase()) !== -1)))
    )
  }

  addProductToCart(product) {
    this.orderMenuService.addProductToCart(product);
  }

}
