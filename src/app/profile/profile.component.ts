import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid: string;
  email: string;
  imageExists = false;
  profileForm: FormGroup;
  subscription: Subscription;

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService) {

  }

  ngOnInit(): void {
    const user = this.authService.user.value;
    this.userid = user.id;
    this.email = user.email;
    const profile = this.profileService.userDetail;
    this.profileService.getUser(user.id).subscribe(user => {
      console.log(user[this.userid]);
      this.profileForm = new FormGroup({
        first_name: new FormControl(user[this.userid].first_name, Validators.required),
        last_name: new FormControl(user[this.userid].last_name, Validators.required),
        //email: new FormControl({value: this.email, disabled: true}, Validators.email),
        phone_number: new FormControl(user[this.userid].phone_number, [Validators.maxLength(10), Validators.minLength(10), Validators.required]),
        display_picture: new FormControl(profile.display_picture ? profile.display_picture: null)
      });
    });
    if (profile.display_picture) {
      this.imageExists = true;
    }
    
    
    this.profileForm = new FormGroup({
      first_name: new FormControl(profile.first_name, Validators.required),
      last_name: new FormControl(profile.last_name, Validators.required),
      email: new FormControl({value: this.email, disabled: true}, Validators.email),
      phone_number: new FormControl(profile.phone_number, [Validators.maxLength(10), Validators.minLength(10), Validators.required]),
      display_picture: new FormControl(profile.display_picture)
    });
    
  }

  onSubmit() {
    if (!this.profileService.init) {
      this.profileService.setUserProfile(this.userid, 
        this.profileForm.value.first_name,
        this.profileForm.value.last_name, 
        this.profileForm.value.email, 
        this.profileForm.value.phone_number
      );
      this.profileService.storeUser();
      this.router.navigate(['/recipes']);
    }
  }
}
