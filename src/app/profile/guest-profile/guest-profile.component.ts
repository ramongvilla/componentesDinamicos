import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.scss']
})
export class GuestProfileComponent {

  constructor(private profileService: ProfileService) { }

  login() {
    this.profileService.login();
  }

}
