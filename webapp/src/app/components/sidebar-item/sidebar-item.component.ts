import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() clicked = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  onClick(id: string) {
    const items = document.getElementsByClassName('sidebar-item');

    for (let item of items) {
      item.classList.remove('active');
    }

    document.getElementById(id)?.classList.add('active');
    this.clicked.emit(false);

    this.router.navigateByUrl(id);
  }
}
