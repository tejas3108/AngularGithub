import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Weather} from '../domain/weather';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  public getWeatherByCityName(cityName : string): Observable<Weather>{
    const url = environment.baseUrl + `/data/2.5/weather`;
    let params = new HttpParams()
          .set("q", cityName)
          .set("appid", environment.apiKey)
          .set("units", "metric");
    return this.httpClient.get<Weather>(url, {params: params});
  }
}
