import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    password: null,
    email: null,
    displayName: null,
    userType: null
  }

  isLoggedIn = false;
  isRegistered = false; //for checking if user is registered

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  onSubmit(): void{
    const {username, password, email, userType} = this.form;

    this.goToHome();
  }

  goToHome(): void {
    this.router.navigate(['/']).then(() => window.location.reload()); //may need to reroute to user dashboard after
  }

  ngOnInit(): void {
  }

}
