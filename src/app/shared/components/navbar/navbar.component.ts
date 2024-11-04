import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks = [
    { label: 'Home', path: '' },
    { label: 'Categories', path: 'categories' },
    { label: 'About', path: 'about' },
    { label: 'Contact Us', path: 'contact' },
  ];

  isDropDownOpen = false;
  isLogin = true;

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.relative');
    if (!clickedInside) {
      this.isDropDownOpen = false;
    }
  }
}
