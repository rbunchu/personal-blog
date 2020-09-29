import { Injectable } from '@angular/core';
import { IAppConfig } from './IAppConfig';

@Injectable({
  providedIn: 'root'
})
export class AppContext
{
  config: IAppConfig;

  constructor() {
    this.config = {
      appDomain: "http://localhost:7081"
    }
  }
}
