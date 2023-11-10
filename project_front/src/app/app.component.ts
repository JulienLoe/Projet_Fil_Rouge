import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NETFLUX';

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: 'Custom title' },
    });
  }
}
