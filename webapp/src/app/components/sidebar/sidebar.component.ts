import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  onClick(id: string) {
    const items = document.getElementsByClassName('item');

    for (let item of items) {
      item.classList.remove('active');
    }

    document.getElementById(id)?.classList.add('active');
    console.log("Clicked");
  }
}
