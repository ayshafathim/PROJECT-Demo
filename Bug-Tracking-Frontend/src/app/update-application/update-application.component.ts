import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/application-service.service';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent {

  constructor(private applicationData: ApplicationServiceService, private _router: Router, private dataService: DataServiceService) { }


  getUpdateApplicationData(data: any) {
    console.warn(data);
    this.applicationData.UpdateApplication(data).subscribe((result) => {
      console.warn(result);
      // set the Updated application data in the data service
      this.dataService.setData(result);
      console.log("created component", result);
      // navigate to the create application component
      alert("Application Updated !!!");
      this._router.navigateByUrl('/createapplicationsuccess');  // open createapplicationsuccess component
    });

  }
}
