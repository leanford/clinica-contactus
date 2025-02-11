import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarOpen = false; // Controla a abertura/fechamento do menu
  isMobile: boolean = window.innerWidth <= 1110; // Verifica se está em modo mobile

  @Output() navigateToSection = new EventEmitter<string>(); // Emite o evento de navegação

  // Alterna a visibilidade do menu
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Fecha o menu e emite a seção para navegação
  onMenuClick(sectionId: string) {
    this.isNavbarOpen = false; // Fecha o menu
    this.navigateToSection.emit(sectionId); // Emite o evento de navegação
  }

  // Detecta redimensionamento da tela para atualizar o estado mobile
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 1110;
  }

  // Detecta cliques fora do menu para fechá-lo
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const navbarMenu = document.querySelector('.navbar-menu') as HTMLElement;
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;

    // Verifica se o clique foi fora do menu e do botão de toggler
    if (!navbarMenu.contains(event.target as Node) && !navbarToggler.contains(event.target as Node)) {
      this.isNavbarOpen = false; // Fecha o menu
    }
  }
}