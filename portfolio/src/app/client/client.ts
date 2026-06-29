import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shared } from './shared/shared';


@Component({
  selector: 'app-client',
  imports: [RouterOutlet, Shared],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {}
