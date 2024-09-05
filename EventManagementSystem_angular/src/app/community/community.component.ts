import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit, AfterViewInit {
  slideIndex: number = 0;
  slides: HTMLCollectionOf<Element> = document.getElementsByClassName('myslide');

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  ngAfterViewInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    const maxSlides = this.slides.length;
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % maxSlides;
      this.updateSlides();
    }, 2000);
  }

  updateSlides(): void {
    Array.from(this.slides).forEach((slide, index) => {
      slide.setAttribute('style', index === this.slideIndex ? 'display: block;' : 'display: none;');
    });
  }
}
