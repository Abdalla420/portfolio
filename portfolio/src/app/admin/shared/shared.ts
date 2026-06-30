import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shared',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './shared.html',
  styleUrl: './shared.css',
})
export class Shared {}
