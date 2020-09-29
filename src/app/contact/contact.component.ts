import { Component, OnInit } from '@angular/core';
import { IContactInfo } from './contactInfo'
import { FormBuilder, Validators} from '@angular/forms';
import { ContactFormData } from './contactFormData';
import { ApiService } from '../services/contact-api.service';
import { ApiResponse } from '../IApiResponse';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactInfo: IContactInfo[] = [];
  captchaToken: string;
  contactForm = this.fb.group({
    fullName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    messageContent: ['', Validators.required],
    recaptcha: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.contactInfo.push({
      'fieldName': 'Address',
      'fieldValue': 'Jelenia Góra, Poland'
    });

    this.contactInfo.push({
      'fieldName': 'Email',
      'fieldValue': 'rbunchu@gmail.com'
    });

    this.contactInfo.push({
      'fieldName': 'Available',
      'fieldValue': 'Yes'
    });
  }

  get form() {
    return this.contactForm.controls;
  }

  sendButtonClick() {
    if(!this.contactForm.valid || !this.captchaToken) {
      return;
    }

    let formData = new ContactFormData();
    formData.fullName = this.contactForm.get('fullName').value;
    formData.emailAddress = this.contactForm.get('emailAddress').value;
    formData.message = this.contactForm.get('messageContent').value;
    formData.response = this.captchaToken;

    //send token with data and validate all at the same time
    this.apiService.addContact(formData).subscribe((response : ApiResponse) => console.log(response));
  }

  resolved(captchaResponse: string) {
    this.captchaToken = captchaResponse;
  }

}
