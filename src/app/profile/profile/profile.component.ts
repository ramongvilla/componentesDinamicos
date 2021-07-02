import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProfileHostDirective } from '../profile-host.directive';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
  
})
export class ProfileComponent implements OnInit, OnDestroy {
  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) {}


  logout() {
    this.profileService.logout();
  }


  login() {
    this.profileService.login();
  }

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$
      .pipe(
        takeUntil(this.destroySubject),
        mergeMap(isLoggedIn =>
          this.profileService.loadComponent(viewContainerRef, isLoggedIn)
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}