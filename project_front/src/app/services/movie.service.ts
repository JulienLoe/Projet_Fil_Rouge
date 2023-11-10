import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_DRESS = "/api/movies"

  constructor(private httpClient : HttpClient) {}
  
  getMovies(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_DRESS);
  }
}
