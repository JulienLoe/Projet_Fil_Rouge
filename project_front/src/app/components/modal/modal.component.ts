import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { ModalService } from 'src/app/services/modal.service';

type Album =  {
  id: number;
  title: string ;
  duration: number;
  years: number
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  movies: any[] = [];

  idMovie: any | null = null

  toto: any = 0
  
  title = 'exoKAngular';

  @Output() close = new EventEmitter()

  onClose(event: Event | undefined = undefined) {
    if (event) {
      if (event.currentTarget === event.target) {
        this.close.emit()
      }
    } else this.close.emit()
  }

  constructor(
    private getMoviesService: GetMoviesService,
    private modalService: ModalService
  ){
    this.getMoviesService.movies$.subscribe(data => this.movies = data)
    this.modalService.idByMovieForModal$.subscribe(data => this.idMovie = data)
    this.getMoviesService.toto$.subscribe(data => this.toto = data)
  }
}
