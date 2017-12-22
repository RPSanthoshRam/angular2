import { Component, OnInit, Attribute} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../../useprofile-service/user-profile.service';


@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent implements OnInit {
  private id;
  private dateTime;
  constructor(@Attribute("format") format, private route:ActivatedRoute,private router:Router ,private userProfileService: UserProfileService ) { 
   this.id=JSON.parse(sessionStorage.getItem("albumID"));
   
   this.format = format;
   this.dateTime =  new Date(); 
   
   setInterval(() => {
       this.dateTime =  new Date();
    }, 1000);
  }

  ngOnInit() {
  }
  fileList : FileList;
  
  fileEvent(event){
    this.fileList = event.target.files;
  }
  
 uploadPicture(pictureDetail){
    console.log(pictureDetail);
    console.log(this.fileList)

    console.log(this.id);
    if (this.fileList.length > 0) {
        const file = this.fileList[0];
        this.dateTime =  new Date(); 
        const formdata = new FormData();
        formdata.append('albumId',this.id);
        console.log(this.id);
        formdata.append('pictureName', pictureDetail.PictureName);
        formdata.append('profilePicture', file);
        formdata.append('dateTime',this.dateTime);
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
    alert("successfully uploaded!");
     
  };
}
