import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../userService/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public alertMessage : string

  constructor(  public userService : UserService,private router : Router ) { }

  ngOnInit() {
  }

  signUp( signUpDetail ){
    console.log(signUpDetail);
    this.userService.addNewUser(signUpDetail).subscribe(
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
    if(response != "null"){
      console.log("success");
      this.router.navigate(['loginPage']);

    }else {
			this.alertMessage = "Invalid credentials!";
    }
  }
  
}
