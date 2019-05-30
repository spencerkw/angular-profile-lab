import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: UserProfile;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }

  editProfile(): void {
    this.profileService.editProfile();
  }

}
