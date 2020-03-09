import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EimConfigModel, EimResourceModel} from "../../model/component";
import {DataService} from "../../core/services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'eim-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  @Output()
  configsChange: EventEmitter<EimConfigModel[]> = new EventEmitter<EimConfigModel[]>();

  description: string;

  selectedResources: string[] = [];

  optionalResources$: Observable<EimResourceModel[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.optionalResources$ = this.dataService.getOptionalResources();
  }

  resourceClick(resource: EimResourceModel) {
    this.description = resource.description;
  }

  resourceSelect(resources: EimResourceModel[]) {
    const data = resources.map((r) => {
      return {
        id: r.id,
        optionalSelected: this.selectedResources.includes(r.id)
      }
    });
    this.configsChange.emit(data);
  }
}
