import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled: boolean = false;
  isHeaderShown:boolean = true
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) { 
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
