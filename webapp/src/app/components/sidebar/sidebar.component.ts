import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  onClick(id: string) {
    const items = document.getElementsByClassName('item');

    for (let item of items) {
      item.classList.remove('active');
    }

    document.getElementById(id)?.classList.add('active');
    console.log("Clicked");

    this.router.navigateByUrl(id);
  }
}
