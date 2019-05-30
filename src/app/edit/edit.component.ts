import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profile: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }

  submitProfile(form) {
    console.log(form);
    let newProfile: UserProfile = {
      name: form.value.name,
      contactInfo: form.value.contactInfo,
      bio: form.value.bio
    };
    this.profileService.setUserProfile(newProfile);

    this.router.navigate(["profile"]);
  }

}
