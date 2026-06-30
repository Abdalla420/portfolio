import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/services/home-service';
import { IHome } from '../../core/models/home-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private _homeService: HomeService, private _cdr: ChangeDetectorRef) {}

  home!: IHome;

  ngOnInit(): void {
    this._homeService.getHome().subscribe((data) => {
      this.home = data;
      this._cdr.detectChanges();
      console.log(data);
    });
  }
}