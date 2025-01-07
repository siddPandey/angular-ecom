import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <p>
      {{product().title}} 
    </p>
  `,
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
}
