import { Component } from "@angular/core";

@Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.css"],
})
export class AppComponent {
   title: string = "ngNorthwind";
   user: string = "Mustafa Hıncal";
   // any => her şey olabilir
   // product: any
}
