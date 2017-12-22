import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../../useprofile-service/user-profile.service';


@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit {
  private userData;
  private alertMessage: string ;
  constructor(private userProfileService :UserProfileService ,private router:Router) { }

  ngOnInit() {
    this.userData= this.userProfileService.getUserData();
  }
 
  addnewAlbum(newAlbumName){
    this.userProfileService.addNewAlbum(this.userData.userID,newAlbumName).subscribe(
      res =>{
        if(res.albumID != "null"){
          console.log("success");
          this.router.navigate(['userProfile/albumList/picture',res.albumID]);
       
        }else {
          alert ("Album name already exist!");
        };
      },
    err => {
      this.alertMessage ="Oops Server Error!";
    }
    );
  }
}

