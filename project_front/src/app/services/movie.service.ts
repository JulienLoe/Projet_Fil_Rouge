import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_MOVIE = "/api/movie"

  readonly ENDPOINT_SEARCH = "/api/movies"

  constructor(private httpClient : HttpClient) {}
  
  getMovies(){
    return this.httpClient.get<any>(this.API_URL+this.ENDPOINT_MOVIE)
    .pipe(
      tap(data => console.log(data))
    );
  }

  postSearch(search: string){
    return this.httpClient.post<any>(this.API_URL+this.ENDPOINT_SEARCH, {body: search})
  }
}
