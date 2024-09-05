import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit, OnDestroy {
  slideIndex: number = 0;
  slides: HTMLCollectionOf<Element> = document.getElementsByClassName("myslide");
  slideInterval: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    const maxSlides = this.slides.length;
    this.slideInterval = setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % maxSlides;
      this.showSlides();
    }, 2000);
  }

  showSlides(): void {
    Array.from(this.slides).forEach((slide, index) => {
      (slide as HTMLElement).style.display = index === this.slideIndex ? 'block' : 'none';
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }
}
