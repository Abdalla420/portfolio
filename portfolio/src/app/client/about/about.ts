import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IAbout } from '../../core/models/about-model';
import { AboutService } from '../../core/services/about-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit{


constructor(private _aboutService: AboutService, private _cdr: ChangeDetectorRef) {}


about!: IAbout;

ngOnInit(): void {
  this._aboutService.getAbout().subscribe((data) => {
    this.about = data;
    this._cdr.detectChanges();
    console.log(data);
  });
};
}
