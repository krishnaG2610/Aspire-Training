import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  slideIndex = 0;
  slides: HTMLCollectionOf<Element> = document.getElementsByClassName('myslide') as HTMLCollectionOf<Element>;

  ngOnInit(): void {
    this.showSlides();
  }

  showSlides(): void {
    const maxSlides = this.slides.length;
    setInterval(() => {
      this.slideIndex++;
      if (this.slideIndex >= maxSlides) {
        this.slideIndex = 0;
      }
      Array.from(this.slides).forEach((slide, index) => {
        (slide as HTMLElement).style.display = index === this.slideIndex ? 'block' : 'none';
      });
    }, 2000);
  }
}
