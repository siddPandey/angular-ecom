import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <h1><app-header/></h1>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Angular-ecom';
}
