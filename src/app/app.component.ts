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

  faqList = [
    {
      question: 'Atendem por planos de saúde?',
      answer: 'Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento.',
    },
    {
      question: 'O que é psicoterapia?',
      answer: 'A psicoterapia é um processo terapêutico conduzido por um profissional qualificado (psicólogo ou psiquiatra) que visa ajudar as pessoas a compreenderem e lidarem com questões emocionais, comportamentais, mentais ou relacionais. Através de diálogo e técnicas específicas, o terapeuta auxilia o paciente a explorar pensamentos, sentimentos e padrões de comportamento, promovendo autoconhecimento, mudanças positivas e bem-estar mental.',
    },
    {
      question: 'Quantas sessões de psicoterapia preciso fazer?',
      answer: 'Não podemos informar um período exato de tempo para obtenção dos resultados esperados, uma vez que isso depende da demanda, do vínculo terapêutico e outras variáveis presentes durante os atendimentos. Para mais informações, busque se informar com o profissional que escolher.',
    },
    {
      question: 'Qual o valor da sessão de psicoterapia?',
      answer: 'Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp.',
    },
    {
      question: 'O que é terapia e supervisão ABA?',
      answer: 'A terapia ABA (Análise do Comportamento Aplicada, ou Applied Behavior Analysis) é uma abordagem terapêutica baseada em evidências científicas, focada no desenvolvimento de habilidades e na modificação de comportamentos em pessoas com autismo ou outros transtornos do desenvolvimento.',
    },
    {
      question: 'O que são grupos de estimulação cognitiva?',
      answer: 'Grupos de estimulação cognitiva são intervenções em grupo conduzidas por profissionais da saúde com o objetivo de manter ou melhorar as funções cognitivas, como memória, atenção, raciocínio e linguagem. Por meio de atividades estruturadas, jogos e interações sociais, os participantes exercitam suas habilidades mentais.',
    }
  ];

  //  faqList = [
  //     {
  //       question: 'O que é psicoterapia?',
  //       answer: 'A psicoterapia é um processo terapêutico conduzido por um profissional qualificado (psicólogo ou psiquiatra) que visa ajudar as pessoas a compreenderem e lidarem com questões emocionais, comportamentais, mentais ou relacionais. Através de diálogo e técnicas específicas, o terapeuta auxilia o paciente a explorar pensamentos, sentimentos e padrões de comportamento, promovendo autoconhecimento, mudanças positivas e bem-estar mental.',
  //     },
  //     {
  //       question: 'Quantas sessões de psicoterapia preciso fazer?',
  //       answer: 'Não podemos informar um período exato de tempo para obtenção dos resultados esperados, uma vez que isso depende da demanda, do vínculo terapêutico e outras variáveis presentes durante os atendimentos. Para mais informações, busque se informar com o profissional que escolher.',
  //     },
  //     {
  //       question: 'Qual o valor da sessão de psicoterapia?',
  //       answer: 'Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp.',
  //     },
  //     {
  //       question: 'Qual a frequência dos atendimentos de psicoterapia?',
  //       answer: 'A frequência das sessões é personalizada de acordo com suas demandas. Frequentemente as sessões acontecem de modo semanal, mas isso pode ser combinado entre você e o profissional escolhido.',
  //     },
  //     {
  //       question: 'Quanto tempo dura uma sessão de psicoterapia?',
  //       answer: 'As sessões duram entre 50 minutos.',
  //     },
  //     {
  //       question: 'Atendem por planos de saúde para psicoterapia?',
  //       answer: 'Não atendemos planos de saúde. Porém, aceitamos diversas formas de pagamento e podemos discutir opções de acompanhamento que cabem no seu orçamento.',
  //     },
  //     {
  //       question: 'O que é avaliação neuropsicológica?',
  //       answer: 'A avaliação neuropsicológica é um processo detalhado e científico que investiga as funções cognitivas, emocionais e comportamentais, relacionando-as ao funcionamento do cérebro. Por meio de testes e instrumentos validados, o neuropsicólogo avalia habilidades como memória, atenção, linguagem, raciocínio, funções executivas e processamento emocional.',
  //     },
  //     {
  //       question: 'Quantas sessões de avaliação neuropsicológica preciso fazer?',
  //       answer: 'Não há um número exato definido, mas o processo de avaliação neuropsicológica costuma durar entre 5 a 10 sessões. A quantidade de sessões irá depender da demanda e especificidade de cada caso.',
  //     },
  //     {
  //       question: 'Qual o valor da sessão de avaliação neuropsicológica?',
  //       answer: 'Segundo o código de ética profissional, não podemos divulgar os valores. No entanto, você pode buscar essa informação no nosso WhatsApp.',
  //     },
  //     {
  //       question: 'Qual a frequência dos atendimentos para avaliação neuropsicológica?',
  //       answer: 'A frequência das sessões é personalizada de acordo com suas demandas. Frequentemente as sessões acontecem de modo semanal, mas isso pode ser combinado entre você e o profissional escolhido.',
  //     },
  //     {
  //       question: 'Quanto tempo dura uma sessão de avaliação neuropsicológica?',
  //       answer: 'As sessões duram entre 50 minutos.',
  //     },
  //     {
  //       question: 'O que é avaliação psicológica para cirurgias?',
  //       answer: 'A avaliação psicológica para cirurgia é um processo realizado por um psicólogo para avaliar a saúde mental e emocional de um paciente antes de uma intervenção cirúrgica. O objetivo é identificar fatores psicológicos que possam influenciar no preparo, na recuperação ou na adaptação pós-cirúrgica.',
  //     },
  //     {
  //       question: 'O que é terapia e supervisão ABA?',
  //       answer: 'A terapia ABA (Análise do Comportamento Aplicada, ou Applied Behavior Analysis) é uma abordagem terapêutica baseada em evidências científicas, focada no desenvolvimento de habilidades e na modificação de comportamentos em pessoas com autismo ou outros transtornos do desenvolvimento.',
  //     },
  //     {
  //       question: 'O que são grupos de estimulação cognitiva?',
  //       answer: 'Grupos de estimulação cognitiva são intervenções em grupo conduzidas por profissionais da saúde com o objetivo de manter ou melhorar as funções cognitivas, como memória, atenção, raciocínio e linguagem. Por meio de atividades estruturadas, jogos e interações sociais, os participantes exercitam suas habilidades mentais.',
  //     }
  //   ];
}
