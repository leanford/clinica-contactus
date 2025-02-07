import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  // imagemQuemSomosNos: { photoUrl: string }[] = [];

  // ngOnInit() {
  //   this.imagemQuemSomosNos.push({ photoUrl: 'assets/imgs/quem-somos.jpeg' });
  // }

  @Input() urls: { photoUrl: string }[] = [];

}