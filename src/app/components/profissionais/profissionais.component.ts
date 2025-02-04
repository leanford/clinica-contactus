import { Component } from '@angular/core';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent {

  dadosParaSlider = [
    { name: 'João Pedro Oliveira Freire', titulo: 'Neuropsicólogo Clínico e Psicoterapeuta', subtitulo: 'CRP 11/18847', photoUrl: 'src/assets/imgs/especialistas/Jp.jpeg' },
    { name: 'Salinas Aerolineas Moisés Rocha Freitas', titulo: 'Psicóloga Clínica e Supervisora ABA', subtitulo: 'CRP 11/18942', photoUrl: 'src/assets/imgs/especialistas/Salinas.jpeg' },
    { name: 'Mirella de Sousa Oliveira', titulo: 'Psicóloga  Clínica e Escolar', subtitulo: 'CRP 11/19015', photoUrl: 'src/assets/imgs/especialistas/Mirella.jpeg' }
  ];

}
