import { Component } from '@angular/core';
import { ApplicationServiceService } from '../services/application-service.service';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-application-by-name',
  templateUrl: './search-application-by-name.component.html',
  styleUrls: ['./search-application-by-name.component.css']
})
export class SearchApplicationByNameComponent {

  constructor(private applicationData: ApplicationServiceService, private router: Router, private dataService: DataServiceService){}



getApplicationByNameData(data:any) {
  this.applicationData.getApplicationByName(data).subscribe((foundappdata) => {
    console.warn(foundappdata);
   
    // set the found application data in the data service
    this.dataService.setData(foundappdata);

    // navigate to the found application component
    this.router.navigate(['/foundapplication']);
  });
}
}
