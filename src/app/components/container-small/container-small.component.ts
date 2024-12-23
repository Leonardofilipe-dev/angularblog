import { Component } from '@angular/core';

@Component({
  selector: 'app-container-small',
  templateUrl: './container-small.component.html',
  styleUrl: './container-small.component.css'
})
export class ContainerSmallComponent {


  images = [
    {
      src: 'https://embedsocial.com/wp-content/uploads/2022/06/ScreenShot2022-05-23at18_26_36_eed95711140ee4e881be3cfd810511a2_800.png.webp',
      alt: 'avaliação cliente'
    },
    {
      src: 'https://embedsocial.com/wp-content/uploads/2022/06/ScreenShot2022-05-23at18_26_50_bf17d85ff9afbfbb5ba7166611827e97_800.png.webp',
      alt: 'avaliação cliente'
    },
    {
      src: 'https://embedsocial.com/wp-content/uploads/2022/06/ScreenShot2022-05-23at18_16_43_bbf2041dd53eb1a10a076cd7d2aa4a2e_800.png',
      alt: 'avaliação cliente'
    },

  ];
}

