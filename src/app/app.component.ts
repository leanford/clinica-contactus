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

      // if (sectionId === 'quem-somos') {
      //   const marginTop = 180;

      //   setTimeout(() => {
      //     window.scrollBy(0, -marginTop);
      //   }, 500);
      // }
    }
  }


  isMobile: boolean = window.innerWidth <= 768;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    console.log('Is Mobile:', this.isMobile);
  }
}
