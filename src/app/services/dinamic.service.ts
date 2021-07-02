import { Injectable,  ComponentFactoryResolver,  ViewContainerRef, ViewChild} from '@angular/core';
import { CircleComponent } from '../componets/circle/circle.component';
import { SquareComponent } from '../componets/square/square.component';
import { TriangleComponent } from '../componets/triangle/triangle.component';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class DinamicService {


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
  
  componentFactoryResolver: ComponentFactoryResolver
  viewContainerRef: ViewContainerRef

  constructor(private appService: AppService) { }

  private clientProfile() {
    return () =>
      import('../componets/circle/circle.component').then(
        m => m.CircleComponent
      );
  }

  loadComponent() {

    
    console.log('ghg');
    

    return this.appService.forChild(this.viewContainerRef, {
      loadChildren: this.clientProfile()//this.tabs[1].component
    });
  }

  changeTab(pos) {

    //this.loadComponent();
    console.log(pos);
    
    
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.tabs[pos].component);
    this.figureContainer.clear();
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();

    //this.figureContainer.createComponent(factory)
    //this.figureContainer.changeDetectorRef.detectChanges();
  }


}
