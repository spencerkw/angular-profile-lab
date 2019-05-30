import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profile: UserProfile = {
    name: "Spencer K-W",
    contactInfo: "keashlywarters@gmail.com",
    bio: "what a guy"
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getUserProfile(): UserProfile {
    return this.profile;
  }

  setUserProfile(newProfile: UserProfile): UserProfile {
    this.profile = newProfile;
    return this.profile;
  }

  editProfile(): void {
    this.router.navigate(["edit-profile"]);
  }

}
