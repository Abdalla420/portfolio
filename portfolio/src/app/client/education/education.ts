import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IEducation } from '../../core/models/education-model';
import { EducationService } from '../../core/services/education-service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit{

    
  constructor(private _educationService: EducationService, private _cdr: ChangeDetectorRef) {}

  education!: IEducation;
  
  ngOnInit(): void {
    this._educationService.getEducation().subscribe((data) => {
      this.education = data;
      this._cdr.detectChanges();
      console.log(data);  
    })
  }
}
