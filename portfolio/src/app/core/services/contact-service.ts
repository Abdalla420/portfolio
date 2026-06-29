import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/contact-model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private _http: HttpClient) {};

  private apiUrl = "http://localhost:5000/api/contact";


  getContact() {
    return this._http.get<IContact>(this.apiUrl);
  };

  updateContact(data: IContact) {
      return this._http.put<IContact>(this.apiUrl, data);
  };
}
