import { Component, Input } from "@angular/core";
import { Team } from "../user/interfaces";

@Component({
  selector: "side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent {
  @Input() teams: Team[];
}
