import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {
  @Input() id: string = 'home';
  @Input() link: string = 'home';
  @Input() icon: string = 'pi pi-minus-circle';
  @Input() label: string = 'Home';
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;

  constructor(private router: Router) {}

  onClick(id: string) {
    const items = document.getElementsByClassName('sidebar-item');

    for (let item of items) {
      item.classList.remove('active');
    }

    document.getElementById(id)?.classList.add('active');
    console.log("Clicked:", document.getElementById(id));

    this.router.navigateByUrl(id);
  }
}
