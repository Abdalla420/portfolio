import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EducationService } from '../../core/services/education-service';
import { IEducation } from '../../core/models/education-model';

@Component({
  selector: 'app-education',
  imports: [ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education implements OnInit{

  constructor(private _educationService: EducationService, private _cdr: ChangeDetectorRef) {}

  educationForm = new FormGroup({
    school: new FormControl(''),
    degree: new FormControl(''),
    fieldOfStudy: new FormControl('')
  })


  ngOnInit(): void {
    this._educationService.getEducation().subscribe((data) => {
      this.educationForm.patchValue(data);
      this._cdr.detectChanges();
      console.log(data);
    })
  }

  onSubmit() {
    this._educationService.updateEducation(this.educationForm.value as IEducation).subscribe( data => {
      console.log(data);
    })
  }


}
