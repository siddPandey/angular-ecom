import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  template: `
    <h1><app-header/></h1>
    <app-products-list/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Angular-ecom';
}
