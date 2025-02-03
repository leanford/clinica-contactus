import { Component, OnInit, Input } from '@angular/core';

interface Slider {
  name: string;
  description: string;
  photoUrl: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  professionals: Slider[] = [];

  details: string = 'Conheça';

  ngOnInit(): void {
    this.professionals = [
      { name: 'Ana Silva', description: 'Desenvolvedora Frontend', photoUrl: 'assets/imgs/mulher.jpg'},
      { name: 'João Souza', description: 'Designer Gráfico', photoUrl: 'assets/imgs/homem.jpg'},
      { name: 'Mariana Costa', description: 'Gerente de Projetos', photoUrl: 'assets/imgs/mulher.jpg'}
    ];
  }
  
  // @Input() professionals: { name: string; description: string; photoUrl: string }[] = [];

}
