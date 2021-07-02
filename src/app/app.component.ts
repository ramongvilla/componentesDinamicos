import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CircleComponent } from './componets/circle/circle.component';
import { DynamicComponent } from './componets/dynamic/dynamic.component';
import { SquareComponent } from './componets/square/square.component';
import { TriangleComponent } from './componets/triangle/triangle.component';
import { DinamicService } from './dinamic.service';
import { DynamicHostDirective } from './dynamic-host.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild (DynamicHostDirective) 
  public dinamycHost: DynamicHostDirective;

  constructor(
    public serviceDinamic: DinamicService,private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef ) {

  }
 
  public aver() {
    const viewContainerRef = this.dinamycHost.viewContainerRef;
    //this.serviceDinamic.createComponent(viewContainerRef);

    
  }



  
  @ViewChild('figureContainer', {read: ViewContainerRef}) figureContainer;
  activeTab = 0;
  tabs = [
    {
      title: 'Triangulo',
      component: TriangleComponent
    },
    {
      title: 'Circulo',
      component: CircleComponent
    },
    {
      title: 'Cuadrado',
      component: SquareComponent
    }
  ]





  changeTab(pos) {

    this.activeTab = pos;

    console.log(pos);
    

    const viewContainerRef = this.dinamycHost.viewContainerRef;

    this.serviceDinamic.createComponent(viewContainerRef,pos,this.tabs);    
  }

  
  changeTab1(pos) {
    
    
  
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.tabs[pos].component);
    console.log(factory);
    
    this.figureContainer.clear();
    //const ref = this.viewContainerRef.createComponent(factory);
    //ref.changeDetectorRef.detectChanges();

    this.figureContainer.createComponent(factory)
    //this.figureContainer.changeDetectorRef.detectChanges();
  }
  

}
