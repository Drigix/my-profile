import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})

export class AboutmeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onUrlClick(url: string): void {
    window.open(url, "_blank");
  }
}
