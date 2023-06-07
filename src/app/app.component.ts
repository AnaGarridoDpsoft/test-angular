import { Component } from '@angular/core';
import { CounterComponent } from './counter/components/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Mi primera app de Angular';
  public counter : number = 10;
}
