import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data: any;

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

   clearData() {
    this.data = null;
  }
}