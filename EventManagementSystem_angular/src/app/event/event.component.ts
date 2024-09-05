import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  slides = [
    '/assets/4.jpg',
    '/assets/6.jpg',
    '/assets/9.jpg',
    '/assets/12.jpg',
  ];
  slideIndex = 0;

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }

  previousSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
