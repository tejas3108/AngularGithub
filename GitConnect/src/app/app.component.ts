import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GitConnect';
  //initialising the api service
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getWeatherByCityName(`Mumbai`).subscribe((res)=>{
      console.log(res);
    });
  }
}
