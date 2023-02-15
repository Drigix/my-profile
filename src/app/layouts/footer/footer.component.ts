import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterCompoment implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  onUrlClick(url: string): void {
    window.open(url, "_blank");
  }
}
