import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../../core/services/home-service';
import { IHome } from '../../core/models/home-model';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private _homeService: HomeService, private _cdr: ChangeDetectorRef) {}

  homeForm = new FormGroup({
    greeting: new FormControl(''),
    name: new FormControl(''),
    title: new FormControl(''),
    summary: new FormControl('')
  });

  ngOnInit(): void {
    this._homeService.getHome().subscribe((data) => {
      this.homeForm.patchValue(data);
      this._cdr.detectChanges();
      console.log(data);
    });
  }

  onSubmit() {
    this._homeService.updateHome(this.homeForm.value as IHome).subscribe((data) => {
      console.log(data);
    });
  }
}