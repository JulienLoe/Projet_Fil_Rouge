import { Component,Output,EventEmitter } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { CommonModule } from '@angular/common'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from 'src/app/services/modal.service';
import { GetMoviesService } from 'src/app/services/get-movies.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  movies: any[] = [];



  constructor(
    private movieService: MovieService,
    private modalService: ModalService,
    ) {
    this.movieService.getMovies().subscribe(movies =>{ this.movies = movies;
    console.log(movies)})
  }

 

  modalRef: MdbModalRef<ModalComponent> | null = null;

  @Output()
  clickModal = new EventEmitter<string>()

  onClickHandler(id: number) {
    this.modalService.modal$.next('form')
    const result = this.movies.filter((movie: any) => movie.idDb == id
     );
    this.modalService.idByMovieForModal$.next(result)
    
    console.log(result)
}
}
