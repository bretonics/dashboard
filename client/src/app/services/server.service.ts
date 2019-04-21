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


  github(): Observable<any> {
    let url = `${this.url}github`;
    return this.http.get(url, this.httpOptions);
  }

  getRepos(url: string): Observable<any> {
    console.log("Getting repos");
    return this.http.jsonp(url, 'callback');

  }

}
