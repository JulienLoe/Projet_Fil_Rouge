import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  searchInput: string = ""

  movies: any[] = [];

  clickSearch(){
    console.log(this.searchInput)
  }

  isLandPage = new BehaviorSubject(true)
  

  ngOnInit(): void {
    this.isLandPage.subscribe({
      
    })
    // // Écoutez les événements de changement de route
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Vérifiez la route
    //     this.isLandingPage =
    //       event.url === '/65e4gn_zvl&a&n&d&i&n&g&5ve46tb8sc32';
    //   }
    // });
  }

  constructor(private router: Router,
    private movieService: MovieService) {}

  onClickSearch(){
    console.log(this.searchInput)
    this.movieService.postSearch(this.searchInput).subscribe(data => {this.movies = data; console.log(this.searchInput)})
  }
}
