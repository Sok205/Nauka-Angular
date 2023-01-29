import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //w tym miejscu znajdują się contents z app.component.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //W tym menu możemy dodawać zmienne, które będą działały na całej aplikacji
  title = 'test';
  message = 'Cyce >>>>>> dupa';
}
