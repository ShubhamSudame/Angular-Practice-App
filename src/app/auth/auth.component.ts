import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    let route: string;
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>; 

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
      route = '/recipes';
    }
    else {
      authObs = this.authService.signUp(email, password);
      route = '/profile';
    }

    authObs.subscribe({
      next: resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate([route]);
      },
      error: error => {
        console.log(error);
        this.error = error;
        this.isLoading = false;
      }
    });
    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
