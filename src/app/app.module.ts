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

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    MyAlbumsComponent,
    CreateAlbumComponent,
    AlbumDetailsComponent,
    UploadPhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
