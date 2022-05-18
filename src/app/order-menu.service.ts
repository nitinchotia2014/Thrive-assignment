import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { MenuItem } from './models/menuItem';

const MENU = {
  "items": [
    {
      "id": 774,
      "name": "Kadak Pao (Two)",
      "image": "",
      "description": "Steam Baked Bread. Crusty Outside, Soft Inside. Tastes Great With Curries!",
      "item_type": "veg",
      "category": "Breads",
      "category_id": 1,
      "price": 40.0
    },
    {
      "id": 771,
      "name": "Phulkas (Two)",
      "image": "",
      "description": "Made With Khapli Or Emmer Wheat, These Rotis Are Less On Gluten And High On Health Benefits",
      "item_type": "veg",
      "category": "Breads",
      "category_id": 1,
      "price": 40.0
    },
    {
      "id": 768,
      "name": "Pasande Kebab",
      "image": "https://i.pinimg.com/564x/53/d2/d7/53d2d70568b136b43329f26be5703f40.jpg",
      "description": "Garlic Yoghurt , Raw onion, dash of lemon",
      "item_type": "non-veg",
      "category": "Rolls",
      "category_id": 2,
      "price": 325.0
    },
    {
      "id": 765,
      "name": "Malabar Paratha (Single)",
      "image": "",
      "description": "Crisp And Flaky",
      "item_type": "veg",
      "category": "Breads",
      "category_id": 1,
      "price": 30.0
    },
    {
      "id": 764,
      "name": "Mutton Sukka",
      "image": "",
      "description": "Curry Mayo And Pickles",
      "item_type": "non-veg",
      "category": "Rolls",
      "category_id": 2,
      "price": 300.0
    },
    {
      "id": 762,
      "name": "Shami Kebab",
      "image": "https://www.teaforturmeric.com/wp-content/uploads/2019/04/Instant-Pot-Shami-Kabab.jpg",
      "description": "Fried Onion, Raw Onion, Pickled Onions and a Green Chutney",
      "item_type": "veg",
      "category": "Rolls",
      "category_id": 2,
      "price": 275.0
    },
    {
      "id": 763,
      "name": "Mutton Tikka",
      "image": "https://www.licious.in/blog/wp-content/uploads/2021/01/mutton-tikka-masala-1-1.jpg",
      "description": "Greens, Pickled Veg Salad and a Red Chutney",
      "item_type": "non-veg",
      "category": "Rolls",
      "category_id": 2,
      "price": 325.0
    },
    {
      "id": 751,
      "name": "Pasande Kebab From The Mughal Courts",
      "image": "",
      "description": "Persian Origin, Marinated Beaten Slices Of Lamb, Charred On A Griddle , Best with a drizzle of Lime juice",
      "item_type": "non-veg",
      "category": "Starters",
      "category_id": 3,
      "price": 500.0
    },
    {
      "id": 374,
      "name": "Ma's Mutton Tikka",
      "image": "",
      "description": "In-House Freshly Ground Spice Mix, Cooked in Curd , Marinated for 12 hours , Gratinated Comfort food filled with love and nostalgia.",
      "item_type": "non-veg",
      "category": "Starters",
      "category_id": 3,
      "price": 475.0
    },
    {
      "id": 375,
      "name": "Pereira Aunty's Mutton Sukka",
      "image": "",
      "description": "Manglorean Style, Pereira Aunty�s Masala Blend, Cooked In Cold Pressed Coconut Oil Boneless chunks from the legs cooked in coconut and Onion Paste ,",
      "item_type": "non-veg",
      "category": "Starters",
      "category_id": 3,
      "price": 475.0
    },
    {
      "id": 137,
      "name": "Shiri's Shaami Kebab",
      "image": "https://www.yummytummyaarthi.com/wp-content/uploads/2016/05/1-55.jpg",
      "description": "Recipe From Kayasths Of Lucknow, Succulent Pan Seared Kebabs Right ratio of Channa Daal and Mince , GS Garam Masala, Served with Chutney Onions",
      "item_type": "veg",
      "category": "Starters",
      "category_id": 3,
      "price": 450.0
    },
    {
      "id": 379,
      "name": "Grand Ma's Mutton Chaap",
      "image": "",
      "description": "Succulent pieces of cooked lamb chops, seared in Ghee til they are crispy outside , Sprinkled with a rub made with corriander and fdry mango",
      "item_type": "non-veg",
      "category": "Starters",
      "category_id": 3,
      "price": 450.0
    },
    {
      "id": 613758,
      "name": "Sri Lankan Jaffna Curry Full",
      "image": "",
      "description": "Perfect Blend Of Tamil Culture And Sri Lankan Cuisine, Special In-House Blend Curry Powder, Fresh Coconut Milk. (Majorly Boneless)",
      "item_type": "veg",
      "category": "Curries",
      "category_id": 4,
      "price": 700.0
    },
    {
      "id": 661,
      "name": "Shekhawati Laal Maas Half",
      "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Laal-Maas.jpg",
      "description": "Recipe As Rich As Heritage Of Khatu Haveli Of Jaipur, Spiciness From Green Chili And Flavour From Red Chilies And Saffron Mutton is Cooked without adding any water, Three disfferent varities of the chilies used . To give a smooth finish the curry is passed through a fine muslin cloth",
      "item_type": "non-veg",
      "category": "Curries",
      "category_id": 4,
      "price": 350.0
    },
    {
      "id": 246,
      "name": "Big basket",
      "image": "",
      "description": "",
      "item_type": "veg",
      "category": "Curries",
      "category_id": 4,
      "price": 450.0
    },
    {
      "id": 617,
      "name": "Bhurani Raita",
      "image": "",
      "description": "Creamy Yoghurt With Paprika And Garlic",
      "item_type": "veg",
      "category": "Accompaniments",
      "category_id": 5,
      "price": 100.0
    },
    {
      "id": 669,
      "name": "Chilled Baigan Ka Bharta",
      "image": "",
      "description": "A Good Accompaniment To The Meat Dishes",
      "item_type": "veg",
      "category": "Accompaniments",
      "category_id": 5,
      "price": 150.0
    },
    {
      "id": 908,
      "name": "Yellow Daal Tadka",
      "image": "",
      "description": "Just to complete the Meal",
      "item_type": "veg",
      "category": "Accompaniments",
      "category_id": 5,
      "price": 150.0
    },
    {
      "id": 172,
      "name": "Tossed Seasonal Greens",
      "image": "",
      "description": "Sauted in Garlic and Spices , Helps you pass through hard times",
      "item_type": "veg",
      "category": "Accompaniments",
      "category_id": 5,
      "price": 150.0
    },
    {
      "id": 676,
      "name": "Rice Kheer With Salted Caramel",
      "image": "",
      "description": "Kheer Made With GI Tagged Ambe Mohar Rice, warm salted caramel on chilled Kheer for the surprise",
      "item_type": "veg",
      "category": "Sweet",
      "category_id": 6,
      "price": 300.0
    },
    {
      "id": 111,
      "name": "Latte",
      "image": "https://www.acouplecooks.com/wp-content/uploads/2021/05/Latte-Art-065.jpg",
      "description": null,
      "item_type": "veg",
      "category": "Beverages",
      "category_id": 7,
      "price": 100.0
    }
  ],
  "tax_applicable": {
    "type": "percentage",
    "value": 5
  },
  "carousel_images": [
    "https://indiachronicles.com/wp-content/uploads/2016/09/locake-saket-delhi.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/10/09/f0/b1/our-kitchen-speciality.jpg",
    "https://images.mygoodtimes.in/wp-content/uploads/2018/12/21114931/Mughlai-Food.jpg",
    "https://pbs.twimg.com/media/EdmHovbUMAAdV1j.jpg"
  ]
};

@Injectable({
  providedIn: 'root'
})
export class OrderMenuService {
  cartProductList = [];
  private priceChanged = new Subject<any>();

  constructor() { }

  getItems(): Observable<MenuItem[]> {
    return of(MENU.items);
  }

  getTaxes() {
    return of(MENU.tax_applicable);
  }

  getCarouselImages() {
    return of(MENU.carousel_images);
  }

  getCart() {
    return of(this.cartProductList);
  }

  isPriceChanged() {
    return this.priceChanged.asObservable();
  }

  clearCart() {
    this.cartProductList = [];
  }

  addProductToCart(product: any) {
    const productExistInCart: any = this.cartProductList.find(({ id }) => id === product.id);
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1, total: product.price });
      return;
    }
    productExistInCart.num += 1;
    productExistInCart.total = (product.price * product.num);
    this.priceChanged.next(1);
  }

  removeProduct(product) {
    const productExistInCart: any = this.cartProductList.find(({ id }) => id === product.id);
    var index = this.cartProductList.map(function(e: any) { return e.id; }).indexOf(product.id);
    if(productExistInCart.num == 1) {
      this.cartProductList.splice(index, 1);
      return;
    }
    productExistInCart.num -= 1;
    productExistInCart.total = (product.price * product.num);
    this.priceChanged.next(1);
  }
}
