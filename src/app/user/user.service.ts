import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Team } from "./interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DevUserService {
  constructor(private httpClient: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.httpClient
      .get("/assets/users.json")
      .pipe(map((response: any) => response.teams));
  }
}
