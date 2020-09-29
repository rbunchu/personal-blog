import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFormData } from '../contact/contactFormData';
import { Observable } from 'rxjs';
import { AppContext } from '../AppContext';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL:string = this.appContext.config.appDomain + "/contact";

  constructor(private httpClient: HttpClient, private appContext: AppContext) { }

  public addContact(contact: ContactFormData): Observable<Object>  {
    return this.httpClient.post(this.SERVER_URL, contact);
  }
}
