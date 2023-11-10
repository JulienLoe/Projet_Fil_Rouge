import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { CommonModule } from '@angular/common'
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  movies: any[] = [];

  constructor(
    private movieService: MovieService,
    private modalService: MdbModalService) {
    
  }

  ngOnInit(): void {
    console.log("on init")
    this.movieService.getMovies().subscribe((data: any) =>{
      this.movies = data;
      console.log(data)
    })
  }

  modalRef: MdbModalRef<ModalComponent> | null = null;

  

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: 'Custom title' },
    });
  }
}
