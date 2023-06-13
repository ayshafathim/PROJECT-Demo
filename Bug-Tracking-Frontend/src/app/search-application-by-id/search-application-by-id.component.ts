import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/application-service.service';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-application-by-id',
  templateUrl: './search-application-by-id.component.html',
  styleUrls: ['./search-application-by-id.component.css']
})
export class SearchApplicationByIdComponent {

  constructor(private applicationData: ApplicationServiceService, private router: Router, private dataService: DataServiceService) { }


  getApplicationByIdData(data: any) {

    this.applicationData.getApplicationById(data).subscribe((foundappdata) => {
      console.warn(foundappdata);

      // set the found application data in the data service
      this.dataService.setData(foundappdata);

      // navigate to the found application component
      this.router.navigate(['/foundapplication']);
    });
  }
}
