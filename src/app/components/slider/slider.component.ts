import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  constructor() { }

  details: string = 'Conheça';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dados']) {
      this.dados.forEach(async (item) => {
        item.photoUrl = await this.verificarImagem(item.photoUrl);
      });
    }
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

  @Input() dados: { name: string;  titulo: string; subtitulo: string; photoUrl: string }[] = [];

}
