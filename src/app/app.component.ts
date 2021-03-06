import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPhotoApplication';

  constructor(public userService: UserService){}

  logout() {
    console.log(this.userService.user)
    this.userService.logout()
    console.log(this.userService.user)
  }
}
