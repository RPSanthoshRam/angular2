import { Injectable } from '@angular/core';
import{ Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProfileService {
  private userProfile ;

  constructor( private  http : Http,) { }
  
  setUserData(userData){
    this.userProfile= userData;
  }

  getUserData(){
    return this.userProfile;
  }

  getUserProfileDetailByID(userID){
    console.log(userID);
    let url : string ="http://localhost:8080/picasa/rest/userDetails/byID/"+userID+"";
    return this.http.get(url).map(response=>response.json());
  }

  addProfileDetail(profileDetail){
    let url : string ="http://localhost:8080/picasa/rest/userDetails/upload";
    return this.http.post(url,profileDetail).map(response => response.json());
  }
  
  getAlbumListByID(userID){
    let url : string ="http://localhost:8080/picasa/rest/collections/byUserID?userID="+userID+"";
    return this.http.get(url).map(response => response.json());
  }

  addNewAlbum(userID,albumName){
    let url : string ="http://localhost:8080/picasa/rest/collections/add?userID="+userID+"";
    return this.http.post(url,albumName).map(response => response.json());
  }
  
  getPicturesByAlbumID(albumID){
    let url : string ="http://localhost:8080/picasa/rest/gallery/albumId/"+albumID+"";
    return this.http.get(url).map(response => response.json());
  }
  pictureUploadToAlbum(pictureDetail){
  let url : string ="http://localhost:8080/picasa/rest/gallery/upload"
  return this.http.post(url,pictureDetail).map(response => response.json());
  }
}
