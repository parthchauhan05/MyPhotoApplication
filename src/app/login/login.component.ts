import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  signInFormVisible = false
  ngOnInit(): void {
  }

  makeSignInFormVisible() {
    this.signInFormVisible = true
  }

  makeSignUpFormVisible() {
    this.signInFormVisible = false
  }
}
