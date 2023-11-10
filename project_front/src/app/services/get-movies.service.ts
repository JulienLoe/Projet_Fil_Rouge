import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  public movies$ = new BehaviorSubject<any>([]);
  public toto$ = new BehaviorSubject<any>([])

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    console.log("on init")
    this.movieService.getMovies().subscribe((data: any) =>{
      this.movies$ = data;
      console.log(data)
    })
  }
}
