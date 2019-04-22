import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  url: string = "http://localhost:3000/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  }

  profile: any;

  constructor(private http: HttpClient) { }

  //--------------------------------------------------------------------------------
  // GitHub APIs
  
  // Get GitHub Profile
  github(): Observable<any> {
    let url = `${this.url}github`;
    return this.http.get(url, this.httpOptions);
  }

  // Get Repos
  getRepos(url: string): Observable<any> {
    console.log("Getting repos");
    return this.http.jsonp(url, 'callback');
  }

  //--------------------------------------------------------------------------------
  // Weather APIs

  // 5 Day Forecast - Boston
  getForecast(): Observable<any> {
    let url = `${this.url}weather`;
    return this.http.get(url, this.httpOptions);
  }
  
}
