import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  isActive = false;

  constructor(private route: Router){};

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  redirectToChat(event: Event): void{
    event.preventDefault();
    event.stopPropagation();
    this.route.navigate(['/chat'])
  }
}
