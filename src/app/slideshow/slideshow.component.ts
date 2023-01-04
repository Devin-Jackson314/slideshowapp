import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slideData: any;

  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSlides();
  }

  getSlides() {
    return this.dataservice.getData().subscribe((data) => {
      this.slideData = data;
      console.log(this.slideData, "first data pull")
    })
  }

}
