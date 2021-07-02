import { Injectable,  ComponentFactoryResolver,  ViewContainerRef, ViewChild} from '@angular/core';
import { DynamicHostDirective } from './dynamic-host.directive';



@Injectable({
  providedIn: 'root'
})
export class DinamicService {

  @ViewChild (DynamicHostDirective) public dinamycHost: DynamicHostDirective;

  constructor(
   private componentFactoryResolver: ComponentFactoryResolver,
    ) {

  }



  public createComponent( vcr: ViewContainerRef,pos,tabs) {
    console.log(pos);
    
    const component = this.componentFactoryResolver.resolveComponentFactory(tabs[pos].component);
    vcr.clear();
    //this.dinamycHost.viewContainerRef.clear();
    vcr.createComponent(component);
   // this.dinamycHost.viewContainerRef.createComponent(component);
  }

}
