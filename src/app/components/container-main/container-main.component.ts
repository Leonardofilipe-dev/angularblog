import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrls: ['./container-main.component.css']
})
export class ContainerMainComponent implements OnInit {
  images = [
    'https://cdn.pixabay.com/photo/2023/05/27/19/15/call-center-8022155_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/03/01/07/55/apartment-8605862_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/08/04/08/13/ai-generated-8943814_1280.jpg'
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => this.navigate('right'), 5000); 
  }

  navigate(direction: 'left' | 'right'): void {
    if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (direction === 'right' && this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else if (direction === 'right') {
      this.currentIndex = 0; // Retorna ao início do slide
    }
  }

}
