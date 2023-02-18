import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

interface IMenuItems {
  id?: number | null;
  name?: string | null;
  url?: string | null;
  isActive?: boolean | null;
  icon?: string | null;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: IMenuItems[] = [];
  isScreenSmall = false;
  showMenu = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = [
      {
        id: 1,
        name: 'HOME',
        url: '',
        isActive: true
      },
      {
        id: 2,
        name: 'ABOUT ME',
        url: '/aboutme',
        isActive: false
      },
      {
        id: 3,
        name: 'SKILLS',
        url: '/skills',
        isActive: false
      },
      {
        id: 4,
        name: 'HOBBIES',
        url: '/hobbies',
        isActive: false
      },
    ];
    window.innerWidth < 1001 ? this.isScreenSmall = true : this.isScreenSmall = false;
  }

  onMenuClick(item: IMenuItems): void {
    this.menuItems.forEach( (menuItem) => {
      (item.id === menuItem.id) ? menuItem.isActive = true : menuItem.isActive = false;
    })
    this.router.navigateByUrl(item.url!);
  }

  onIconMenuClick(): void {
    this.showMenu = !this.showMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if(event.target.innerWidth < 1001) {
      this.isScreenSmall = true;
    } else {
      this.isScreenSmall = false;
      this.showMenu = true;
    }
  }
}
