import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get('https://mocki.io/v1/7d7ae9e7-4097-4d49-906c-36f3f1de7b8d');
  }

}