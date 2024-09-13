import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

  <h1>Counter Component</h1>
  <div>
    Counter:{{ counter }}
  </div>
  <br>
  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(delta: number): void {
    this.counter +=delta;
  }

  reset(){
    this.counter = 10;
  }
}

