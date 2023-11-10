import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './components/login/modal/modal.component';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NETFLUX';

  modalVisibility = ""

  idMovie: any | null = null
  

  changeModalVisilibty(value: string) {
    this.modalVisibility = value
    console.log(this.idMovie)
  }

  

  clickModal(){
    console.log('ok')
    
  }

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: ModalService
    ) {
      this.modalService.modal$.subscribe(data => this.modalVisibility = data)
      this.modalService.idByMovieForModal$.subscribe(data => this.idMovie = data)
      console.log(this.idMovie)
    }

}
