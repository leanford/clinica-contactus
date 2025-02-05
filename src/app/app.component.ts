import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinica-contactus-web';

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  // isMobile: boolean = window.innerWidth <= 1110;

  // @HostListener('window:resize')
  // onResize() {
  //   this.isMobile = window.innerWidth <= 1110;
  //   console.log('Is Mobile:', this.isMobile);
  // }
}
