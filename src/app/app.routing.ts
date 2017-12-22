import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserprofileComponent } from'./userprofile/userprofile/userprofile.component';
import { AboutComponent } from'./userprofile/about/about.component';
import { AccountDetailsComponent } from'./userprofile/account-details/account-details.component';
import { AlbumListComponent } from'./userprofile/album-list/album-list/album-list.component';
import { NewAlbumComponent } from'./userprofile/album-list/new-album/new-album.component';
import { UploadPhotosComponent } from'./userprofile/album-list/upload-photos/upload-photos.component';
import { PicturesComponent } from'./userprofile/album-list/pictures/pictures.component';


const routes : Routes = [ 
    {path : '', redirectTo: 'loginPage' , pathMatch : 'full'},
    {path : 'loginPage', component : LoginComponent },
    {path : 'SignUpPage',component : SignUpComponent },
    {path : 'userProfile',component : UserprofileComponent ,
        children:[
            {path:'about', component : AboutComponent  },
            {path:'accountDetails', component : AccountDetailsComponent },
            {path:'albumList', component : AlbumListComponent , 
                children:[
                    {path : 'newAlbum', component : NewAlbumComponent},
                    {path : 'picture/:albumID', component : PicturesComponent,
                        children:[
                            {path : 'uploadPhotos', component : UploadPhotosComponent},
                        ]},
                ]},
    ]}
            
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
}) 

export class RoutingModule {}