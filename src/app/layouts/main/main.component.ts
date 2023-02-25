import { Component, OnInit } from '@angular/core';

interface IFrameElement {
  id?: number | null;
  img?: string | null;
  style?: string | null;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  frameElements: IFrameElement[] = [];
  constructor() { }

  ngOnInit() {
    this.frameElements = [
      {
        id: 1,
        img: "../../../assets/photos/politechnika-slaska__1_-removebg-preview.png",
        style: 'height: 200px'
      },
      {
        id: 2,
        img: "../../../assets/photos/ente-removebg-preview.png",
        style: 'height: 70px'
      },
      {
        id: 3,
        img: "../../../assets/photos/angular.png",
        style: 'height: 140px'
      },
      {
        id: 4,
        img: "../../../assets/photos/java.png",
        style: 'height: 100px; padding-bottom:20px;'
      }
    ]
  }
}
