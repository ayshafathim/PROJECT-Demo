import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/application-service.service';
import { DataServiceService } from '../services/data-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent {
  constructor(private applicationData: ApplicationServiceService, private _router: Router, private dataService: DataServiceService) { }

  getNewApplicationData(data: any) {
    console.warn(data);
    this.applicationData.CreteApplication(data).subscribe((result) => {
      console.warn(result);
      alert("Application Created !!!");
        // set the CREATED application data in the data service
        this.dataService.setData(result);
        console.log("created component",result);
            // navigate to the create application component
    this._router.navigateByUrl('/createapplicationsuccess');  // open createapplicationsuccess component


    });
    
  
  }

}
