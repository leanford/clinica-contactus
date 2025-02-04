import { Component } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent {

  dadosParaSlider = [
    { name: 'João Pedro Oliveira Freire', description: 'Neuropsicólogo Clínico e Psicoterapeuta | CRP 11/18847', photoUrl: 'src/assets/imgs/especialistas/Jp.jpeg' },
    { name: 'Salinas Freitas', description: 'Desenvolvedora Frontend', photoUrl: 'src/assets/imgs/especialistas/Salinas.jpeg' },
    { name: 'Mirella de Sousa Oliveira', description: 'Psicóloga  Clínica e Escolar | CRP 11/19015', photoUrl: 'src/assets/imgs/especialistas/Mirella.jpeg' }
  ];

}
