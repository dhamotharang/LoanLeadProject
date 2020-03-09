import {Component, OnInit} from '@angular/core';
import {EimEnvironmentModel} from "../../model/environment/environment";
import {EnvironmentService} from "../../core/services/environment.service";
import {Observable} from "rxjs";

@Component({
  selector: 'eim-navigable-component',
  templateUrl: './navigable.component.html',
  styleUrls: ['./navigable.component.scss']
})
export class NavigableComponent implements OnInit {

  environment$: Observable<EimEnvironmentModel>;

  constructor(private environmentService: EnvironmentService) {
  }

  ngOnInit() {
    this.environment$ = this.environmentService.getEnvironment();
  }

}
