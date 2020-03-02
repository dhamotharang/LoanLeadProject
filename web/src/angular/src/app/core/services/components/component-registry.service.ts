import {Injectable, Injector, Type} from '@angular/core';
import {createCustomElement} from "@angular/elements";
import {ResourcesComponent} from "../../../resources/resources.component";

@Injectable({
  providedIn: 'root'
})
export class ComponentRegistryService {

  constructor(private injector: Injector) {
  }

  define<T>(tag: string, type: Type<T>) {
    const component = createCustomElement(type, {injector: this.injector});
    customElements.define(tag, component);
  }
}
