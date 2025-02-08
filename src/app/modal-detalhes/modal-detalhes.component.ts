import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes',
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.css']
})
export class ModalDetalhesComponent {

  @Input() isModalOpen = false;
  @Input() data: any = null;
  @Output() closed = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isModalOpen']) {
      if (this.isModalOpen) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  }

  private disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableScroll() {
    document.body.style.overflow = '';
  }



  close() {
    this.closed.emit();
  }
}
