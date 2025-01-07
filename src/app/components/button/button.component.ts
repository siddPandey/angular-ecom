import { Component, input , output} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()" 
      class=" text-black w-full px-5 py-2 rounded-xl shadow-md hover:bg-slate-200 transition-all duration-300"> 
      {{label()}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
 label = input(''); 

  btnClicked = output();  
}
