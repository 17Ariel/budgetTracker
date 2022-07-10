import { Component } from '@angular/core';
import { AppserviceService } from './service/appservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budgetTracker';
  names:string;
  constructor(private appservice: AppserviceService) { }
  ngOnit() {
    this.names = this.appservice.testMethod();
  }
}
