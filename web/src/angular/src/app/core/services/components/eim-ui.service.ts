import {ComponentRef, Injectable} from '@angular/core';
import {DynamicComponentFactoryService} from "./dynamic-component-factory.service";
import {DynamicComponent, ExternalActionMessage} from "../../../model/dynamic-component";

@Injectable({
  providedIn: 'root'
})
export class EimUiService {

  private activeComponent: ComponentRef<DynamicComponent>;

  constructor(private dynamicComponentFactoryService: DynamicComponentFactoryService) {
  }

  createComponent(data: ExternalActionMessage): DynamicComponent {
    if (this.activeComponent) {
      this.activeComponent.instance.hide.emit();
    }
    this.activeComponent = this.dynamicComponentFactoryService.createComponent(data.action);
    this.activeComponent.instance.config = JSON.parse(JSON.stringify(data));
    // pass method because it is loosed at stringify
    this.activeComponent.instance.config.saveMapper = data.saveMapper;
    this.activeComponent.instance.show();
    this.activeComponent.onDestroy(() => {
      this.activeComponent = undefined;
    });
    return this.activeComponent.instance;
  }


}
