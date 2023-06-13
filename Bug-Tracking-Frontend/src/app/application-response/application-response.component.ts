import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-application-response',
  templateUrl: './application-response.component.html',
  styleUrls: ['./application-response.component.css']
})
export class ApplicationResponseComponent implements OnInit{
  foundApplicationData: any;
  errorMessage = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    // retrieve the data from the DataService
    const data = this.dataService.getData();
    console.log("Inside ApplicationResponseComponent",data);
    if (!data) {
      this.errorMessage = 'No Application created. Please try again.';
    } else {
      this.foundApplicationData = data;
    }
}
}
