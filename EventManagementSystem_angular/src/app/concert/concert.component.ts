import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit, AfterViewInit {
  slideIndex: number = 0;

  ngOnInit(): void {
    // Initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    const slides = document.getElementsByClassName('myslide') as HTMLCollectionOf<Element>;
    const maxSlides = slides.length;
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % maxSlides;
      this.updateSlides();
    }, 2000);
  }

  updateSlides(): void {
    const slides = document.getElementsByClassName('myslide') as HTMLCollectionOf<Element>;
    Array.from(slides).forEach((slide, index) => {
      (slide as HTMLElement).style.display = index === this.slideIndex ? 'block' : 'none';
    });
  }
}
