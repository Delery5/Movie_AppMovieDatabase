import { Component, Input, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Item } from './item';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  
  @Input() itemData: Item | null = null;
  


  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
