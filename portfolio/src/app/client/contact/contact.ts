import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ContactService } from '../../core/services/contact-service';
import { IContact } from '../../core/models/contact-model';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit{

  constructor(private _contactService: ContactService, private _cdr: ChangeDetectorRef){}

  contact!: IContact;  


  ngOnInit(): void {
    this._contactService.getContact().subscribe((data) => {
      this.contact = data;
      this._cdr.detectChanges();
      console.log(data); 
    });
  }
}
