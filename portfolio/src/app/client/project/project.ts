import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project-service';
import { IProject } from '../../core/models/project-model';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project implements OnInit{
  constructor(private _projectService: ProjectService, private _cdr: ChangeDetectorRef) {};

  projects!: IProject[];

  ngOnInit(): void {
    this._projectService.getProject().subscribe((data) => {
      this.projects = data;
      this._cdr.detectChanges();
      console.log(data);
    })
  }
}
