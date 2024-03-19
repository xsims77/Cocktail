import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktails.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public fruit: string = '';

  public addFruit() {
    console.log(this.fruit);
  }
}
