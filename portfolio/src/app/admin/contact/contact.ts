import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
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
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\+20|0)?1[0125][0-9]{8}$/)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    linkedinUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https:\/\/(www\.)?linkedin\.com\/.+$/)
    ]),
    githubUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https:\/\/(www\.)?github\.com\/.+$/)
    ])
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
