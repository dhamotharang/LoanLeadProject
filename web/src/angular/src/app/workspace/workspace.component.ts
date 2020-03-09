import {Component, OnInit} from '@angular/core';
import {DataService} from "../core/services/data.service";
import {Observable} from "rxjs";
import {EimUiConfigModel} from "../model/eim-ui-config";

@Component({
  selector: 'eim-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  workspace$: Observable<EimUiConfigModel>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.workspace$ = this.dataService.getWorkspace();
  }

}
