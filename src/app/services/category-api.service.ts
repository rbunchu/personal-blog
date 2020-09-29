import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppContext } from '../AppContext';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {
  private SERVER_URL:string = this.appContext.config.appDomain + "/category";

  constructor(private appContext: AppContext, private httpClient: HttpClient) { }
}
