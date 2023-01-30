import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan: string = "Pizza lepsza niż pasztet" //Utworzenie zmiennej slogan działającej w całym projekcie
}
