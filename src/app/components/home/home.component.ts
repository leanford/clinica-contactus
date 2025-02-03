import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'Quem Somos';
  description: string = `Somos uma empresa dedicada a fornecer soluções inovadoras para nossos clientes.
                          Nossa missão é agregar valor através de produtos de qualidade e um atendimento ágil e eficaz.`;
  team = [
    { name: 'Ana Silva', role: 'CEO' },
    { name: 'Carlos Souza', role: 'CTO' },
    { name: 'Mariana Costa', role: 'Designer' },
    { name: 'Pedro Martins', role: 'Desenvolvedor' }
  ];
}
