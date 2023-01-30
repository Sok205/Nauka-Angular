import { Component } from '@angular/core';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent {
  toppings = [
    {id:1, name: 'Salami ', kcal:'30', vegetarian:"No", image: '/assets/salami.jpg'},
    {id:2, name: 'Mozzarella ', kcal:'69', vegetarian:"Yes", image: '/assets/Mozzarella.jpg'},
    {id:3, name: 'Mushrooms ', kcal:'10', vegetarian:"Yes", image: '/assets/mushrooms.jpg'},
    {id:2, name: 'Ham ', kcal:'23', vegetarian:"No", image: '/assets/ham.jpg'},
    {id:1, name: 'Basil ', kcal:'5', vegetarian:"Yes", image: '/assets/basil.jpg'},
    {id:2, name: 'Pineapple ', kcal:'69', vegetarian:"Yes", image: '/assets/Pineapple.png'}
  ]
}
