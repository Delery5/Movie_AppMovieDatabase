import {state, style, transition, animate, trigger} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({capacity: 0})),
      transition('void <=> *', [animate('1s')]),
    ])
  ]
})
export class SliderComponent {
  @Input() items:Movie[] = [];

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
