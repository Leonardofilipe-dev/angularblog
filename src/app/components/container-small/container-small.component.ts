import { Component } from '@angular/core';

@Component({
  selector: 'app-container-small',
  templateUrl: './container-small.component.html',
  styleUrl: './container-small.component.css'
})
export class ContainerSmallComponent {


  images = [
    {
      src: 'https://soaresgasparetto.adv.br/App/Views/src/imagens/avaliacoes/1.jpeg',
      alt: 'image1'
    },
    {
      src: 'https://souzautolub.com.br/wp-content/uploads/2023/03/Sem-Titulo-1.jpg',
      alt: 'image2'
    },
    {
      src: 'https://vilacariocamarmoresegranitos.com/wp-content/uploads/2023/08/comentario8.png',
      alt: 'image3'
    },

  ];
}

