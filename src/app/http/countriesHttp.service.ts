import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CountriesHttpService {


  constructor(private http: HttpClient) { }

  fetchCountries() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('fields', 'name,population,region,capital,flags');

    return this.http.get<any[]>(
      'https://restcountries.com/v3.1/all',
      {
        params: searchParams,
      }
    )
      .pipe(
        map(countries => countries.map(country => ({
          name: country.name.official,
          flag: country.flags.svg,
          capital: country.capital[0],
          population: country.population,
          region: country.region,
        }))),
        catchError(errorRes => throwError(errorRes))
      )
  }

}