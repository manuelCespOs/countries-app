import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesHttpService } from './http/countriesHttp.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'countries-app';
  constructor(private countriesHttpService: CountriesHttpService) { }

  ngOnInit() {
    this.countriesHttpService.fetchCountries().subscribe(data => console.log(data[0]));
  }

}
