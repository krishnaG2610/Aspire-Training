import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
  slideIndex = 0;
  slides: HTMLCollectionOf<Element> = document.getElementsByClassName("myslide");

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
