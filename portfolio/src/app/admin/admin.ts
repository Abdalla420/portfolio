import { Component } from '@angular/core';
import { Shared } from './shared/shared';

@Component({
  selector: 'app-admin',
  imports: [ Shared],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
