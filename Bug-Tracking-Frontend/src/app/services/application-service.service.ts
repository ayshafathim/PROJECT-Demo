import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8090/api/v1/applications";

  //Get All Applications
  getApplications() {
    return this.http.get(this.url);
  }

  //Create Application
  CreteApplication(data: any) {
    return this.http.post(this.url, data);
  }
  //Update Application
  UpdateApplication(data: any) {
    return this.http.put(this.url, data);
  }

  //Get Application by Name 
  getApplicationByName(data: any) {
    return this.http.get(this.url + "/name?name=" + data.name);
  }
  
  //Get Application by ID 
  getApplicationById(data: any) {
     return this.http.get(this.url + "/" + data.id);
  }
  
  //Delete Applicationby ID.
  deleteApplication(data: any) {
    return this.http.delete(this.url + "?id=" + data.id,{ responseType: 'text' });
   
  }
}
