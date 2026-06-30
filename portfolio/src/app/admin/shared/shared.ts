import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shared',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shared.html',
  styleUrl: './shared.css',
})
export class Shared {}
