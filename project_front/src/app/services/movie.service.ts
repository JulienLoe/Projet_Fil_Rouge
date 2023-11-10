import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_DRESS = "/api/movie"

  constructor(private httpClient : HttpClient) {}
  
  getMovies(){
    return this.httpClient.get<any>(this.API_URL+this.ENDPOINT_DRESS)
    .pipe(
      tap(data => console.log(data))
    );
  }
}
