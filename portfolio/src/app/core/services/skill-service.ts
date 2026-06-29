import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISkill } from '../models/skill-model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private _http: HttpClient){};

  private apiUrl = "http://localhost:5000/api/skill";

  getSkill() {
    return this._http.get<ISkill[]>(this.apiUrl);
  };
  updateSkill(id: string, data: ISkill) {
    return this._http.put<ISkill>(`${this.apiUrl}/${id}`, data);
  };
  addSkill(data: ISkill) {
    return this._http.post<ISkill>(this.apiUrl, data);
  };
  deleteSkill(id: string) {
    return this._http.delete<ISkill>(`${this.apiUrl}/${id}`);
  };

}
