import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component'; //importuje Container
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component'; 
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ToppingsComponent } from './toppings/toppings.component'; //Pizwala na implementacje ngModel

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent, //deklaruje container
    NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ToppingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng generate component nazwa - tworzy nowy komponent (prawy przycisk na nazwe projektu, żeby odpalić ziintegrowany terminal)
//ng serve - odpala projekt
// 