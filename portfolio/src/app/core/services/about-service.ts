import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAbout } from '../models/about-model';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private _http: HttpClient) {};

  private apiUrl = "http://localhost:5000/api/about";


  getAbout() {
    return this._http.get<IAbout>(this.apiUrl);
  };

  updateAbout(data: IAbout) {
    return this._http.put<IAbout>(this.apiUrl, data);
  };
}
