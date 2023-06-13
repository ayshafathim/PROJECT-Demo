import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/application-service.service';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-delete-application',
  templateUrl: './delete-application.component.html',
  styleUrls: ['./delete-application.component.css']
})
export class DeleteApplicationComponent {
  constructor(private applicationData: ApplicationServiceService, private _router: Router, private dataService: DataServiceService) { }

  applicationfound: any;

  deleteApplicationByIdData(data: any) {
    this.applicationData.deleteApplication(data).subscribe((result) => {
      alert("Application Deleted !!!");
      // set the Deleted application data in the data service
      this.applicationfound='Application';
      this.dataService.setData(data);
      console.log("Deleted component", result);
      // navigate to the response application component
      this._router.navigateByUrl('/createapplicationsuccess');  // open createapplicationsuccess component
    });
  }
}