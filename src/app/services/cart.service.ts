import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]); 

  addtoCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() { }
}
