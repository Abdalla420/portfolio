import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about-service';
import { IAbout } from '../../core/models/about-model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit{
  constructor(private _aboutService:AboutService, private _crd: ChangeDetectorRef){};



  aboutForm = new FormGroup({
    content: new FormControl('')
  })




  ngOnInit(): void {
    this._aboutService.getAbout().subscribe((data) => {
      this.aboutForm.patchValue(data);
      this._crd.detectChanges();
      console.log(data);
    });
  }

  onSubmit() {
    this._aboutService.updateAbout(this.aboutForm.value as IAbout).subscribe(data => {
      console.log(data);
    })
  }

}
