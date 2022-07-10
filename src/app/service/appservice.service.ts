import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor() { }
  testMethod() {
    let name = "John Doe";
    return name;
  }
  
}
