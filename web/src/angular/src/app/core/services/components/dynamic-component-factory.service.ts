import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type
} from '@angular/core';
import {DynamicComponent, DynamicComponentType} from "../../../model/dynamic-component";
import {CustomTooltipComponent} from "../../../ui/components/custom-tooltip/custom-tooltip.component";
import {ExternalWindowComponent} from "../../../ui/components/external-window/external-window.component";

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentFactoryService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {
  }

  public createComponent(action: DynamicComponentType): ComponentRef<DynamicComponent> {
    switch (action) {
      case DynamicComponentType.POPUP:
        return this.create(CustomTooltipComponent);
      case DynamicComponentType.WINDOW:
        return this.create(ExternalWindowComponent);
      default:
        console.log('unknown type ' + action);
    }
    return null;
  }


  private create<T extends DynamicComponent>(type: Type<T>): ComponentRef<DynamicComponent> {
    const componentFactory: ComponentFactory<T> =
      this.componentFactoryResolver.resolveComponentFactory(type);
    const compRef: ComponentRef<T> = componentFactory.create(this.injector);
    this.appendToBody(compRef);
    compRef.instance.hide.subscribe(() => this.destroy(compRef));
    return compRef;
  }

  private destroy<T>(componentRef: ComponentRef<T>) {
    this.removeFromBody(componentRef);
    componentRef.destroy();
  }

  private appendToBody<T>(componentRef: ComponentRef<T>) {
    this.appRef.attachView(componentRef.hostView);
    const domElem = DynamicComponentFactoryService.getDom(componentRef);
    document.body.appendChild(domElem);
  }

  private removeFromBody<T>(componentRef: ComponentRef<T>) {
    this.appRef.detachView(componentRef.hostView);
    const domElem = DynamicComponentFactoryService.getDom(componentRef);
    document.body.removeChild(domElem);
  }

  private static getDom(componentRef: ComponentRef<any>): HTMLElement {
    // Get DOM element from component
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }
}
