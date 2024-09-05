import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-book-page',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, AfterViewInit {
  slideIndex = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startSlideShow();
  }

  startSlideShow() {
    const slides = document.getElementsByClassName('myslide') as HTMLCollectionOf<HTMLElement>;
    const maxSlides = slides.length;

    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % maxSlides;
      Array.from(slides).forEach((slide, index) => {
        slide.style.display = index === this.slideIndex ? 'block' : 'none';
      });
    }, 2000);
  }

  scrollToActivity(): void {
    const scrollActivity = document.querySelector('.activity') as HTMLElement;
    if (scrollActivity) {
      scrollActivity.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
