import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHome } from '../models/home-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _http: HttpClient) {}

  private apiUrl = 'http://localhost:5000/api/home';

  getHome() {
    return this._http.get<IHome>(this.apiUrl);
  }

  updateHome(data: IHome) {
    return this._http.put<IHome>(this.apiUrl, data);
  }
}