import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import{UserProfileService} from '../../useprofile-service/user-profile.service'

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
})
export class PicturesComponent implements OnInit {
  private id;
  private pictures;
  private alertMessage: string;
  
  constructor( private route:ActivatedRoute, private router:Router ,private userProfileService: UserProfileService ) {
    this.route.params.subscribe(params => {
      this.id = params['albumID'];
      this.getPicturesByAlbumID(this.id);
      sessionStorage.setItem("albumID",JSON.stringify(this.id));
    }
    );
      
   }

  getPicturesByAlbumID(albumID){
    this.userProfileService.getPicturesByAlbumID(albumID).subscribe(
      res =>{
        if(res.albumDetailID != "null"){
          console.log("success");
          sessionStorage.setItem("pictures",JSON.stringify(res));
          this.router.navigate(['userProfile/albumList/picture',albumID]);
          this.pictures=JSON.parse(sessionStorage.getItem("pictures"));
        }else {
          this.alertMessage = "Invalid credentials!";
        };
      },
    err => {
      this.alertMessage ="Oops Server Error!";
    }
    );
    }
    
    uploadPage(){
      this.router.navigate(['/userProfile/albumList/picture/',this.id,'uploadPhotos']);
    }
   

    ngOnInit() {
      
           this.getPicturesByAlbumID(this.id);
      }  
}


