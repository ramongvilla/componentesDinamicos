import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileHostDirective } from './profile/profile-host.directive';
import { ProfileComponent } from './profile/profile/profile.component';
import { GuestProfileComponent } from './profile/guest-profile/guest-profile.component';
import { ClientProfileComponent } from './profile/client-profile/client-profile.component';
import { CircleComponent } from './componets/circle/circle.component';
import { SquareComponent } from './componets/square/square.component';
import { TriangleComponent } from './componets/triangle/triangle.component';
import { DynamicComponent } from './componets/dynamic/dynamic.component';
import { DynamicHostDirective } from './dynamic-host.directive';


const ENTRYCOMPONENTS = [
  SquareComponent,
  TriangleComponent,
  CircleComponent
];

const COMPONENTS = [AppComponent];

@NgModule({
  declarations: [
    AppComponent,
    ProfileHostDirective,
    ProfileComponent,
    GuestProfileComponent,
    ClientProfileComponent,
    CircleComponent,
    SquareComponent,
    TriangleComponent,

    COMPONENTS,
    ENTRYCOMPONENTS,
    DynamicComponent,
    DynamicHostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
