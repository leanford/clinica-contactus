import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Output() navigateToSection = new EventEmitter<string>(); // Emite o evento de navegação

  onMenuClick(sectionId: string) {
    this.navigateToSection.emit(sectionId); // Emite o evento de navegação
  }
}
