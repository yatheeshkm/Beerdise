import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() beer: Object;
  @Input() similarBeers: Object;

  @ViewChild('content') content: TemplateRef<any>;

  constructor(private modalService: NgbModal) {
  }

  open() {
    this.modalService.open(this.content, {
      size: 'lg',
      windowClass: 'extra-lg'
    });
  }
}
