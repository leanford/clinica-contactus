import { Component } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent {

  dadosParaSlider = [
    { name: 'João Freire', description: 'Designer Gráfico', photoUrl: 'src/assets/imgs/especialistas/Jp.jpeg' },
    { name: 'Salinas Freitas', description: 'Desenvolvedora Frontend', photoUrl: 'src/assets/imgs/especialistas/Salinas.jpeg' },
    { name: 'Mirella', description: 'Gerente de Projetos', photoUrl: 'src/assets/imgs/especialistas/Mirella.jpeg' }
  ];

}
