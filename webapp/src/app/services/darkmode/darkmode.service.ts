import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  constructor() { }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
    this.changeColors();
  }

  changeColors() {
    const element = document.querySelector('html');
    const header = document.getElementById('header');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');

    if (element?.classList.contains('dark')) {
      header?.classList.add('dark-header');
      sidebar?.classList.add('dark-sidebar');
      content?.classList.add('dark-content');
      footer?.classList.add('dark-footer');
    } else {
      header?.classList.remove('dark-header');
      sidebar?.classList.remove('dark-sidebar');
      content?.classList.remove('dark-content');
      footer?.classList.remove('dark-footer');
    }
  }

  setDrawerColor() {
    const element = document.querySelector('html');
    const drawer = document.getElementById('drawer');
    const header = document.getElementById('logo');

    if (element?.classList.contains('dark')) {
      drawer?.classList.add('dark-drawer');
      header?.classList.add('dark-header');
    } else {
      drawer?.classList.remove('dark-drawer');
      header?.classList.remove('dark-header');
    }
  }
}
