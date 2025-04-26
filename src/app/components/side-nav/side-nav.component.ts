import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit {
  isSidebarOpen = false;
  isMobileView = false;

  navLinks = [
    { href: 'http://localhost:4200/home', icon: '/assets/plus.png', label: 'Home' },
    { href: 'http://localhost:4200/about', icon: '/assets/user.png', label: 'About' },
    { href: 'http://localhost:4200/skills', icon: '/assets/skills.png', label: 'Skills' },
    { href: 'http://localhost:4200/portfolio', icon: '/assets/keypad.png', label: 'Projects' },
    { href: 'http://localhost:4200/contact', icon: '/assets/chatboxes.png', label: 'Contact' }
  ];

  ngOnInit() {
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 992;
    if (!this.isMobileView) {
      this.isSidebarOpen = false;
    }
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  closeSidebar() {
    this.isSidebarOpen = false;
  }
  
}