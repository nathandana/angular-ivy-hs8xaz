import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss", "./design-system-particles.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
