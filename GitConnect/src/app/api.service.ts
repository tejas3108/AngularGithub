import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Weather} from './openweather/weather';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  public getWeatherByCityName(cityName : string):Observable<any>{
    const url = environment.baseUrl + `/data/2.5/weather`;
    let params = new HttpParams()
          .set("q", cityName)
          .set("q", cityName)
          .set("appid", environment.apiKey)
          .set("units", "metric");
    return this.httpClient.get(url, {params: params});
  }
}
