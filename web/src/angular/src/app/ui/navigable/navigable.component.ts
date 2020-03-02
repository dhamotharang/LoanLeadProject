import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NavBarModel} from "../../model/config-model";
import {DataService} from "../../core/services/data.service";

@Component({
  selector: 'eim-navigable-component',
  templateUrl: './navigable.component.html',
  styleUrls: ['./navigable.component.scss']
})
export class NavigableComponent implements OnInit {

  navigation$: Observable<NavBarModel>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.navigation$ = this.dataService.getNavigation();
  }
}
