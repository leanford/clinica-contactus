import { Component, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements AfterViewInit {
  @Input() urls: { photoUrl: string }[] = []; // Lista de URLs das imagens
  lightboxImages: any[] = []; // Lista de imagens para o Lightbox
  private swiper: Swiper | undefined; // Instância do Swiper
  isModalOpen = false; // Controla se o modal está aberto
  selectedImage = ''; // Armazena a URL da imagem selecionada

  constructor(private lightbox: Lightbox) {}

  ngAfterViewInit(): void {
    // Inicializa o Swiper
    this.swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }
    });

    // Prepara as imagens para o Lightbox
    this.urls.forEach((url, index) => {
      this.lightboxImages.push({
        src: url.photoUrl,
        caption: `Imagem ${index + 1}`,
        thumb: url.photoUrl
      });
    });
  }

  // Abre o Lightbox
  openLightbox(index: number): void {
    this.selectedImage = this.urls[index].photoUrl;
    this.isModalOpen = true;
  }

  // Fecha o modal
  closeImage(): void {
    this.isModalOpen = false;
  }
}