import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { UserService } from './../../userService/user.service';
import { UserProfileService} from './../useprofile-service/user-profile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})

export class UserprofileComponent implements OnInit {
   private userData;
   private userProfileData;
   public alertMessage : string;

   constructor( private router: Router, 
                private userService : UserService , 
                private userProfileService :UserProfileService ) {

                 }

  ngOnInit() {
    this.userData=JSON.parse(sessionStorage.getItem("userDetail")); 
      console.log(this.userData)
      if (this.userData == null){
        this.router.navigate(["loginPage"]);
      } else {
        this.userProfileService.setUserData(this.userData);
        this.getUserProfileDetail(this.userData.userID);
    }
  }

  getUserProfileDetail(userID){
    this.userProfileService.getUserProfileDetailByID(userID).subscribe(
      res =>{
          if(res.userDetailID != "null"){
            console.log("success");
            sessionStorage.setItem("userProfile",JSON.stringify(res));
            this.userProfileData=JSON.parse(sessionStorage.getItem("userProfile"));
          }else {
            this.alertMessage = "Invalid credentials!";
          };
        },
      err => {
        this.alertMessage ="Oops Server Error!";
      }
    );
  }
}
