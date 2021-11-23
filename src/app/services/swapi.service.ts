import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SwapiService {

readonly SWAPIURL= environment.SWAPIURL

  constructor(private http2:HttpClient) { }

getSwapi(path){

  return this.http2.get(`${this.SWAPIURL}${path}`)
}

}
