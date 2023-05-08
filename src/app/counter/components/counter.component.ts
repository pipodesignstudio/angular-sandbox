import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p>{{counter}}</p>
<hr>
<button (click)="increaseBy()">+1</button>
<button (click)="resetValue()">Resetear</button>
<button (click)="decreaseBy()">-1</button>
    `
})

export class CounterComponent{
    public counter:number = 3;
  increaseBy():void {
    this.counter +=1;
  }
  decreaseBy():void {
    this.counter -=1;
  }

  resetValue():void {
    this.counter = 3;
  }
     

}