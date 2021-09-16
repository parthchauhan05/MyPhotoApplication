import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  signInFormVisible = false
  email = ''
  password = ''
  ngOnInit(): void {
  }

  makeSignInFormVisible() {
    this.signInFormVisible = true
  }

  makeSignUpFormVisible() {
    this.signInFormVisible = false
  }

  logIn() {
    console.log("User tried to login");
    this.userService.login(this.email, this.password)
    this.email = this.password = '';
  }

  signUp() {
    console.log("User tried to sign up")
    this.userService.signup(this.email, this.password)
    this.email = this.password = '';
  }

}
