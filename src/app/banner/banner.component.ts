import { Component, OnInit } from '@angular/core';
import { OrderMenuService } from '../order-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  carouselImages: string[];
  currentSlide = 0;

  constructor(private orderMenuService: OrderMenuService) { }

  ngOnInit(): void {
    this.orderMenuService.getCarouselImages().subscribe(images => this.carouselImages = images);
  }

  nextImg() {
    this.currentSlide += 1;
  }

  prevImg() {
    this.currentSlide -= 1;
  }

}
