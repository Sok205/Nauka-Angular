import { Component } from "@angular/core"; //import dekoratora

@Component({
    selector: 'app-container', //Dodanie selektora
    templateUrl: './container.component.html',//view template
    styleUrls: ['./container.component.css'] //css, który chcemy wykorzystać w view template
})
export class ContainerComponent{ //musimy zadeklarować tą klasę w pliku 'app.module.ts'
}