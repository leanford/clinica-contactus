import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagens: { photoUrl: string }[] = [];
  quantidadeImagens: number = 6;  // Número de imagens

  ngOnInit(): void {
    // Usando um loop para gerar os caminhos das imagens dinamicamente
    for (let i = 1; i <= this.quantidadeImagens; i++) {
      const nomeImagem = `${i}.jpeg`; // Supondo que as imagens sejam '1.jpeg', '2.jpeg', '3.jpeg', etc.
      this.imagens.push({ photoUrl: `assets/imgs/imgs-clinica/${nomeImagem}` });
    }
  }

  title: string = 'Quem Somos';
  description: string = `Fundada por três psicólogos apaixonados pela profissão, a Contactus nasceu da crença no poder transformador da psicologia para promover qualidade de vida e bem-estar. Nosso trabalho é guiado pelas normas éticas da profissão e pelo conhecimento científico mais atualizado, aliado a recursos personalizados e de alta qualidade.  

Na Contactus, o foco está no acolhimento das dificuldades de cada paciente, oferecendo um espaço seguro e empático para o desenvolvimento pessoal. Acreditamos no trabalho conjunto, onde paciente e terapeuta caminham lado a lado em busca de resultados concretos e relevantes, sempre apresentados de forma clara e transparente.  

Seja para superar desafios emocionais, desenvolver autoconhecimento, alcançar uma vida mais equilibrada ou identificar um diagnóstico preciso, estamos aqui para ajudar você..`;
  team = [
    { name: 'Ana Silva', role: 'CEO' },
    { name: 'Carlos Souza', role: 'CTO' },
    { name: 'Mariana Costa', role: 'Designer' },
    { name: 'Pedro Martins', role: 'Desenvolvedor' }
  ];

}
