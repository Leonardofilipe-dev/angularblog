import { Component } from '@angular/core';

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrl: './container-main.component.css'
})
export class ContainerMainComponent {
  titles = ['Manchete numero 1', 'Manchete numero 2', 'Manchete numero 3'];
  descriptions = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Dolor Sit Amet has been the industry\'s standard dummy text.',
    'Consectetur Adipiscing is used by designers to focus on layout and content.'
  ];
  currentIndex = 0;

  navigate(direction: 'left' | 'right'): void {
    if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (direction === 'right' && this.currentIndex < this.titles.length - 1) {
      this.currentIndex++;
    }
  }
}
