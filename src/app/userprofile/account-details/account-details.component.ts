import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../useprofile-service/user-profile.service';
import { UserService } from '../../userService/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
   
  private alertMessage : string;
   private alertMessageForSuccess : string;
   private userData;

  constructor (public userProfileService : UserProfileService,private router : Router) { }

  ngOnInit() {
   this.userData= this.userProfileService.getUserData();
  }
  fileList : FileList;
  
  fileEvent(event){
    this.fileList = event.target.files;
  }
  
  addUserProfile(userDetail){
    console.log(userDetail);
    console.log(this.fileList)

    console.log(this.userData.userID);
    if (this.fileList.length > 0) {
        const file = this.fileList[0];
        const formdata = new FormData();
        formdata.append('userId',this.userData.userID);
        console.log(this.userData.userID);
        
        formdata.append('phoneNumber', userDetail.phoneNumber);
        console.log(userDetail);
        
        formdata.append('profilePicture', file);
        console.log(formdata);
       this.userProfileService.addProfileDetail(formdata).subscribe(
        res => {
          this.cbsGetResponse(res);
        },
        err => {
          alert('Oops Server Error!');
        }
      );
  }
}
  cbsGetResponse(response){
    console.log(response);
    this.userData=
    alert("successfully uploaded!");
    sessionStorage.setItem("userProfile",JSON.stringify(response));
    this.router.navigate(['userProfile/about']);
  };
}
  
