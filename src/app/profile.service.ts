import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: UserProfile = {
    name: "Spencer K-W",
    contactInfo: "keashlywarters@gmail.com",
    bio: "what a guy"
  };

  constructor(private router: Router) { }

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
