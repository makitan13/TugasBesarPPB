import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'DX Kamen Rider',
      expanded: true,
      products: [
        { id: 0, name: 'Progrise Key Original', price: '32',  },
        { id: 1, name: 'DX Belt KR. Vulcan', price: '100' },
        { id: 2, name: 'DX Belt KR. 01', price: '120' },
        { id: 3, name: 'DX CSM Kr. Trouser ZAIA', price: '500' }
      ]
    },
    {
      category: 'Figure',
      products: [
        { id: 4, name: 'Figure Hatsune Miku 39 Music', price: '50' },
        { id: 5, name: 'Nendoroid Metal Gear Solid Snake', price: '65' }
      ]
    },
    {
      category: 'GameCard Nintendo',
      products: [
        { id: 6, name: 'Smash Bros Ultimate Japan', price: '75' },
        { id: 7, name: 'Xenoblade Chronicle 2 Deluxe', price: '45' },
        { id: 8, name: 'Fire Emblem: Three Houses', price: '65' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

 
}