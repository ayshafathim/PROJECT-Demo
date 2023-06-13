import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/application-service.service';
@Component({
  selector: 'app-view-all-applications',
  templateUrl: './view-all-applications.component.html',
  styleUrls: ['./view-all-applications.component.css']
})
export class ViewAllApplicationsComponent {

  applications: any;

  constructor(private applicationData: ApplicationServiceService) {
    applicationData.getApplications().subscribe((data) =>{
      console.warn(data);
      this.applications=data;
    });
  }
}
