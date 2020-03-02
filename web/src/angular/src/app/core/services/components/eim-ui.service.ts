import {ComponentRef, Injectable} from '@angular/core';
import {DynamicComponentFactoryService} from "./dynamic-component-factory.service";
import {DynamicComponent, ExternalActionMessage} from "../../../model/dynamic-component";

@Injectable({
  providedIn: 'root'
})
export class EimUiService {

  constructor(private dynamicComponentFactoryService: DynamicComponentFactoryService) {
  }

  createComponent(data: ExternalActionMessage): DynamicComponent {
    const component: ComponentRef<DynamicComponent> =
      this.dynamicComponentFactoryService.createComponent(data.action);
    component.instance.config = JSON.parse(JSON.stringify(data));
    component.instance.show();
    return component.instance;
  }


}
