import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEducation } from '../models/education-model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private _http: HttpClient) {}

  private apiUrl = "http://localhost:5000/api/education";


  getEducation() {
    return this._http.get<IEducation>(this.apiUrl);
  };

  updateEducation(data: IEducation) {
      return this._http.put<IEducation>(this.apiUrl, data);
  };
}
