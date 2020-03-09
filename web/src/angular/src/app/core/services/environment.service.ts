import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {EimEnvironmentModel} from "../../model/environment/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {clone} from "../common";
import {Urls} from "../../config/routes/constants";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private environment: EimEnvironmentModel;
  private environment$: BehaviorSubject<EimEnvironmentModel> = new BehaviorSubject<EimEnvironmentModel>(undefined);

  constructor(private dataService: DataService, private router: Router, private titleService: Title) {
    this.dataService.getEnvironment().subscribe((data) => {
      this.setEnvironment(data);
    });
  }

  getEnvironment(): Observable<EimEnvironmentModel> {
    return this.environment$;
  }

  isEnvironmentConfigured(): boolean {
    return this.environment && this.environment.name && this.environment.name.length > 0;
  }

  save(environment: EimEnvironmentModel): Observable<EimEnvironmentModel> {
    return this.dataService.saveEnvironment(environment).pipe(map((data) => {
      this.setEnvironment(data);
      return this.copyOfEnvironment();
    }));
  }

  private setEnvironment(data: EimEnvironmentModel): void {
    this.environment = clone(data);
    this.environment$.next(clone(data));
    this.setTitle();
    if (!this.isEnvironmentConfigured()) {
      this.router.navigate([`${Urls.NAV}/${Urls.ENVIRONMENT_SETTINGS}`]);
    }
  }

  private setTitle(): void {
    if (this.environment && this.environment.name) {
      this.titleService.setTitle("IM - " + this.environment.name);
    } else {
      this.titleService.setTitle("IM");
    }
  }

  private copyOfEnvironment(): EimEnvironmentModel {
    return JSON.parse(JSON.stringify((this.environment)));
  }
}
