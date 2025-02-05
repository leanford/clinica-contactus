import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  @Output() navigateToSection = new EventEmitter<string>();

  onMenuClick(sectionId: string) {
    this.navigateToSection.emit(sectionId);
  }

  isMobile: boolean = window.innerWidth <= 1110;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 1110;
    console.log('Is Mobile:', this.isMobile);
  }

}