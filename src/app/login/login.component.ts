import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../userService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public userDetail;
  public alertMessage : string;
  constructor( public userService: UserService ,private router : Router) {

   }

  ngOnInit() {
  }
  
  login(loginDetail){
    console.log(loginDetail);
      this.userService.loginAuthentication(loginDetail).subscribe(
        res => {
          this.cbsGetResponse(res);
        },
        err => {
          this.alertMessage ="Oops Server Error!";
        }
      );
  }

  cbsGetResponse(response){
    console.log(response);
    if(response.userID != "null"){
      console.log("success");
      sessionStorage.setItem("userDetail",JSON.stringify(response));
      this.router.navigate(['userProfile/about']);

    }else {
			this.alertMessage = "Invalid credentials!";
    }
  }
}
