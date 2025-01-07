import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
      {{label()}}
    </button> 
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input(''); 

  btnClicked = output();  

  // handleButtonClick() {
  //   console.log('Button clicked');
  //   this.btnClicked.emit();
  // } 
}
