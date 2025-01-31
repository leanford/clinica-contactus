import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarOpen = false; // Estado do menu (aberto/fechado)

  // Função para alternar o estado do menu
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}