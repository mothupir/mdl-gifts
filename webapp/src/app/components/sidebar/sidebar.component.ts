import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() clicked = new EventEmitter<boolean>();

  onClick(visible: any) {
    this.clicked.emit(visible);
  }
}
