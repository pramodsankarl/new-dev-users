import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DevUserService } from "./user/user.service";
import { Team } from "./user/interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  teams$: Observable<Team[]>;

  constructor(private userService: DevUserService) {
    this.teams$ = this.userService.getTeams();
  }
}
