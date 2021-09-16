import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  title = "Profile Page Title"
  imageUrl = "https://avatars0.githubusercontent.com/u/13947149?s=400&u=435c97ab53b4ad1b086a5b5723c1e55925c552dd&v=4"
  name="Parth"
  viewCount = 0
  ngOnInit(): void {
  }

  incrementCount() {
    this.viewCount++
  }
}
