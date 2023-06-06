import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{ counter }}</h1>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="decreaseBy(-1)">-1</button>
  `,

})
export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number):void {
    this.counter += 1;
  }

  decreaseBy( value: number):void {
    this.counter -= 1;
  }

  resetCounter( value: number):void {
    this.counter = 10;
  }
}
