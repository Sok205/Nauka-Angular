import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  SearchValue: string ="";
  ChangeSearchValue(eventData: Event){ //Klasa stworzona w pliku html wykorzystująca event binding, $event przechowuje wartość 
    console.log((<HTMLInputElement>eventData.target).value)
    this.SearchValue = (<HTMLInputElement>eventData.target).value; //Przekazanie danych z tego do Search Value
  }
}
