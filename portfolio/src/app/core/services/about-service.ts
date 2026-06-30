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
  // note to self: since we update some of the fields(especially for _id), we use Partial<IAbout>
  // we add it in the component's ts too in the method,
  // option 2 that I found later and sticked with is to add optional to _id in every interface
  updateAbout(data: IAbout) {
    return this._http.put<IAbout>(this.apiUrl, data);
  };
}
