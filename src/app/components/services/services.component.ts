import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.dados.forEach(async (item) => {
      item.photoUrl = await this.verificarImagem(item.photoUrl);
    });

  }

  private async verificarImagem(url: string): Promise<string> {
    if (await this.carregaImagem(url)) {
      return url;
    }

    const urlCorrigida = url.startsWith('src/') ? url.replace('src/', '') : `src/${url}`;
    return (await this.carregaImagem(urlCorrigida)) ? urlCorrigida : url;
  }

  private carregaImagem(url: string): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  dados = [
    { titulo: 'Psicoterapia', photoUrl: 'assets/imgs/psicoterapia.png' },
    { titulo: 'Terapia ABA', photoUrl: 'assets/imgs/aba.png' },
    { titulo: 'Avaliação Neuropsicológica', photoUrl: 'assets/imgs/neuropsicologia.png' },
    { titulo: 'Avaliação Psicológica para Cirurgias', photoUrl: 'assets/imgs/av-cirurgias.png' }
  ];
}
