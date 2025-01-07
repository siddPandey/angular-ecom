import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-500 px-4 py-3 shadow-md flex justify-between">    
      <button class="text-xl" routerLink="/">My Store</button> 
      <app-primary-button [label]="'Cart ('+ cartService.cart().length+')'" 
      routerLink="/cart"
      />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

cartService = inject(CartService);
  // cart = signal('Cart');

  // showButtonClicked() {
  //   console.log('clicked');
  // } 
}
