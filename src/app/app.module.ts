import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  Ng2FileRequiredModule } from 'ng2-file-required';

import{ RoutingModule } from'./app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './userService/user.service';
import { UserProfileService } from './userprofile/useprofile-service/user-profile.service'
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserprofileComponent } from './userprofile/userprofile/userprofile.component';
import { AboutComponent } from './userprofile/about/about.component';
import { AccountDetailsComponent } from './userprofile/account-details/account-details.component';
import { AlbumListComponent } from './userprofile/album-list/album-list/album-list.component';
import { NewAlbumComponent } from './userprofile/album-list/new-album/new-album.component';
import { UploadPhotosComponent } from './userprofile/album-list/upload-photos/upload-photos.component';
import { PicturesComponent } from './userprofile/album-list/pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    AccountDetailsComponent,
    AlbumListComponent,
    NewAlbumComponent,
    UploadPhotosComponent,
    UserprofileComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    Ng2FileRequiredModule
  ],
  providers: [ UserService , UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
