import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExternalActionMessage} from "../../../model/dynamic-component";
import {FooterAction, FooterButton} from "../../../model/ui/components/footer";
import {DataService} from "../../../core/services/data.service";
import {EimComponentModel, EimConfigModel} from "../../../model/component";

@Component({
  selector: 'eim-external-configuration',
  templateUrl: './external-configuration.component.html',
  styleUrls: ['./external-configuration.component.scss']
})
export class ExternalConfigurationComponent implements OnInit {

  @Input()
  config: ExternalActionMessage;

  @Output()
  hide: EventEmitter<any> = new EventEmitter();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  dataChanged(component: EimComponentModel, configs: EimConfigModel[]) {
    console.log('external configuration config change', configs);
    component.configs = configs;
    if (!configs) {
      this.disableSaveButton();
    } else {
      this.enableSaveButton();
    }
  }

  actionPerformed(event: FooterButton) {
    switch (event.type) {
      case "SAVE":
        if (event.action) {
          this.saveData(event.action);
        }
        break;
      case "CLOSE":
        this.hide.emit();
        break;
    }
  }

  private saveData(action: FooterAction): void {
    let data = this.convertToSaveObject(this.config.component);
    if (this.config.saveMapper && typeof this.config.saveMapper === 'function') {
      data = this.config.saveMapper(data);
    }
    this.dataService.performAction(action.method, action.url, data).subscribe((data) => {
      if (data) {
        this.hide.emit();
      } else {
        console.log('error');
      }
    });
  }

  private convertToSaveObject(component: EimComponentModel) {
    return {
      id: component.id,
      configs: component.configs,
      components: component.components ? component.components.map(this.convertToSaveObject) : undefined,
      resources: component.resources ? component.resources.map(this.convertToSaveObject) : undefined
    }
  }

  private disableSaveButton() {
    this.config.footer.buttons.forEach((e) => {
      if (e.type === 'SAVE') {
        e.disabled = true;
      }
    });
  }

  private enableSaveButton() {
    this.config.footer.buttons.forEach((e) => {
      if (e.type === 'SAVE') {
        e.disabled = false;
      }
    });
  }

  configError() {
    const component = this.config.component;
    const uiConfig = component.uiConfig;
    const c = component.components || [];
    const r = component.resources || [];
    return !uiConfig && c.length == 0 && r.length == 0;
  }
}
