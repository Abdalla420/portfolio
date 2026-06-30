import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ContactService } from '../../core/services/contact-service';
import { IContact } from '../../core/models/contact-model';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit{

  constructor(private _contactService: ContactService, private _cdr: ChangeDetectorRef){}

  contactForm = new FormGroup({
    phone: new FormControl(''),
    email: new FormControl(''),
    linkedinUrl: new FormControl(''),
    githubUrl: new FormControl('')
  })

  ngOnInit(): void {
    this._contactService.getContact().subscribe((data) => {
      this.contactForm.patchValue(data);
      this._cdr.detectChanges();
      console.log(data);
    })
  }


  onSubmit() {
    this._contactService.updateContact(this.contactForm.value as IContact).subscribe( data => {
      console.log(data);
    })
  }
}
