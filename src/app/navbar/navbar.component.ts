import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  closeNavbar() {
    const navbarNav = document.querySelector('.navbar-collapse');
    if (navbarNav?.classList.contains('show')) {
      // Use the Collapse class from Bootstrap's global namespace
      const collapseInstance = new (window as any).bootstrap.Collapse(navbarNav);
      collapseInstance.toggle();
    }
  }
}
