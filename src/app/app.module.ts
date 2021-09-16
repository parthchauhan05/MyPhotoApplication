import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { RecentAlbumsComponent } from './recent-albums/recent-albums.component';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    MyAlbumsComponent,
    CreateAlbumComponent,
    AlbumDetailsComponent,
    UploadPhotoComponent,
    PhotoDetailsComponent,
    RecentAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
