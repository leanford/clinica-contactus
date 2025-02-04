import { Component } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent {

  dadosParaSlider = [
    { name: 'João Freire', description: 'Designer Gráfico', photoUrl: 'assets/imgs/especialistas/Jp.jpeg' },
    { name: 'Salinas Freitas', description: 'Desenvolvedora Frontend', photoUrl: 'assets/imgs/especialistas/Salinas.jpeg' },
    { name: 'Mirella', description: 'Gerente de Projetos', photoUrl: 'assets/imgs/especialistas/Mirella.jpeg' }
  ];

}
