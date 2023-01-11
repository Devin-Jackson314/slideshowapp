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
      console.log(this.slideData[0].artist, "artist data")
     
    })
  }

  //imageSize() {
    // if(item.type == 'B'){
        //image.style.width = "px"
   // }
  //}

}
