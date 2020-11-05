import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private Http: HttpClient) { }
  myMethod() {
    return console.log('hey there I am using whatsapp');
  }
  getBeer() {
    return this.Http.get("https://myfirstapiproject.herokuapp.com/api");
  }
}
