import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Shared } from './shared/shared';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Shared],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
