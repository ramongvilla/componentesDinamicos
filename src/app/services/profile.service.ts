import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';


@Injectable({ providedIn: 'root' })
export class ProfileService {
  private isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();


  vcr: ViewContainerRef

  constructor(private appService: AppService) {}

  private guestProfile() {
    return () =>
      import('../componets/circle/circle.component').then(
        m => m.CircleComponent
      );
  }

  private clientProfile() {
    return () =>
      import('../componets/square/square.component').then(
        m => m.SquareComponent
      );
  }

  login() {
    
    this.isLoggedIn.next(true);
  }

  logout() {
   
    //this.loadComponent2
    this.isLoggedIn.next(false);
  }


  loadComponent2(vcr: ViewContainerRef, componente: () => Promise<any>) {
    vcr.clear();

    return this.appService.forChild(vcr, {
      loadChildren: componente
      //loadChildren: isLoggedIn ? this.clientProfile() : this.guestProfile()
    });
  }
  

  loadComponent(vcr: ViewContainerRef, isLoggedIn: boolean) {
    vcr.clear();

    return this.appService.forChild(vcr, {
      loadChildren: isLoggedIn ? this.clientProfile() : this.guestProfile()
    });
  }
}