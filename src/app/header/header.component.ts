import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = "Pizza lepsza niż pasztet" //Utworzenie zmiennej slogan działającej w całym projekcie
  source: string = "/assets/pizza.jpg"; //Możemy użyć tego po dodaniu do src nawiasów kwadratowych -> [src]
  getSlogan(){
    return 'Pizza lepsza niż pasztet'
  }
}
