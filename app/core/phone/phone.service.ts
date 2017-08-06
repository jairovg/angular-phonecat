import * as angular from 'angular';
import { downgradeInjectable } from '@angular/upgrade/static';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

export interface Phone {
  age: number,
  id: string,
  imageUrl: string,
  name: string,
  snippet: string
}

@Injectable()
export class PhoneService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  public query(): Promise<Phone[]> {

    return this
              .http
              .get('phones/phones.json')
              .toPromise()
              .then((response) => response.json() as Phone[])
              ;
  }

  public get(phoneId: string): Promise<Phone> {
    return this
              .http
              .get(`phones/${phoneId}.json`)
              .toPromise()
              .then((response) => response.json() as Phone)
              ;
  }
}

angular
  .module('core.phone', [])
  .service('Phone', downgradeInjectable(PhoneService))
  ;