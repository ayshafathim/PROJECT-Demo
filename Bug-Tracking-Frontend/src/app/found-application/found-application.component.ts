import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-found-application',
  templateUrl: './found-application.component.html',
  styleUrls: ['./found-application.component.css']
})
export class FoundApplicationComponent implements OnInit {
  foundApplicationData: any;
  errorMessage = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
   // alert('Oninit');
    // retrieve the data from the DataService
    const data = this.dataService.getData();
    console.log('Inside onit of FoundApplicationComponent',data);
    if (!data) {
      this.errorMessage = 'No data found. Please try again.';
    } else {
      this.foundApplicationData = data;
    }
}

}