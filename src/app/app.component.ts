import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/Countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountriesService]
})

export class AppComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  
  ngOnInit() {
  }
}