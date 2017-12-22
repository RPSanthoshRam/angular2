import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserProfileService} from '../../useprofile-service/user-profile.service';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  private albumList ;
  private userData;
  private alertMessage;
  
  constructor(private userProfileService:UserProfileService , private router:Router) { }

  ngOnInit() {
    this.userData=JSON.parse(sessionStorage.getItem("userDetail")); 
    this.getAlbumList(this.userData.userID);
  }
   
  getAlbumList(userID){
        this.userProfileService.getAlbumListByID(userID).subscribe(
          res =>{
            if(res.albumID != "null"){
              console.log("success");
              sessionStorage.setItem("albums",JSON.stringify(res));
              /* this.router.navigate(['albumList']); */
              this.albumList=JSON.parse(sessionStorage.getItem("albums"));
            }else {
              this.alertMessage = "Invalid credentials!";
            };
          },
        err => {
          this.alertMessage ="Oops Server Error!";
        }
        );
   }

   getAlbumContentByAlbumID(albumID){
    this.router.navigate(['userProfile/albumList/picture',albumID]);
   }
}