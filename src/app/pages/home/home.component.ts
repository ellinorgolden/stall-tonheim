import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    [NgFor],
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

images = [
  'assets/slider1.jpg',
  'assets/slider2.jpg',
  'assets/slider3.jpg',
  'assets/slider4.jpg'
];
currentIndex = 0;
transitionEnabled = true;

get sliderImages() {
  return [...this.images, this.images[0]];
}

ngOnInit() {
  setInterval(() => {
    this.nextSlide();
  }, 3000);
}

nextSlide() {
  this.currentIndex++;
  this.transitionEnabled = true;
}

onTransitionEnd() {
  if (this.currentIndex === this.sliderImages.length - 1) {
    setTimeout(() => {
      this.transitionEnabled = false;
      this.currentIndex = 0;
    }, 600);
  }
}

}