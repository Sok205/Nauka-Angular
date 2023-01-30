import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
                <p> This website uses cookies to provide better user experience</p>
                <div class="close"><button class="btn" (click)="closeNotification()">x</button></div>
             </div>`, //używając template, nie musimy podawać scieżki do pliku html
  styles: [".notification-div{margin: 10px 0px; padding: 10px, 20px; background-color: #FAD7A0; text-align:center}", ".fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}", "p{font-size: 14px}",".close{float: right; margin-top: -35px}"]
})
export class NotificationComponent {
  displayNotification:boolean = false; //Jeżeli True, to notyfikacja nie wyświetli się [hidden] = "displayNotification"
  closeNotification(){
    this.displayNotification = true; //Zmienia wartość displayNotification na true
  }
}
