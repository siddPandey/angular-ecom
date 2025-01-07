import { Component,computed,inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white p-6  rounded-xl shadow-xl border" >  
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4 mt-2">
        <div class="flex gap-4">
          <span class="text-lg">Total</span>
          <span class="text-lg font-bold">$ {{total()}}</span>  
      </div>
      <app-primary-button label="Proceed to Checkout" 
        />
    </div> 

  `,
  styles: ``
})
export class OrderSummaryComponent {
  cardService = inject(CartService)

  total= computed(() => {
    return this.cardService.cart().reduce((acc, item) => acc + item.price, 0);
  })
}
