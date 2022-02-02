import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/Countries.service';


export interface CountryElement {
  capital: string;
  code: number;
  continent: {
    code: string,
    name: string
  };
  currency: string;
  name: string;
  phone: string;
}
//  aa
@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  countries=[];
  // displayedColumns: string[] = ['Capital', 'Code', 'Contient', 'Currency', 'Name', 'Phone'];
  
  ngOnInit() {
    // subscribe to the Observable to make the HTTP call
    this.countriesService.getCountries().subscribe((data) => {
      this.countries=data.data.countries;
      console.log(this.countries);
    });
  }

}
