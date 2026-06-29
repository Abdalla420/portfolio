import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private _http: HttpClient){}

  private apiUrl = "http://localhost:5000/api/project";

  getProject() {
    return this._http.get<IProject[]>(this.apiUrl);
  };
  updateProject(id: string, data: IProject) {
    return this._http.put<IProject>(`${this.apiUrl}/${id}`, data);
  };  
  addProject(data: IProject) {
    return this._http.post<IProject>(this.apiUrl, data);
  };
  deleteProject(id: string) {
    return this._http.delete<IProject>(`${this.apiUrl}/${id}`);
  };
}
