import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shared',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './shared.html',
  styleUrl: './shared.css',
})
export class Shared {}
