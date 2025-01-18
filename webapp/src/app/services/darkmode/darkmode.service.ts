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
    const html = document.querySelector('html');
    const header = document.getElementById('header');
    const sidebars = document.getElementsByClassName('sidebar');
    const footer = document.getElementById('footer');
    const cards = document.getElementsByClassName('card');

    setTimeout(() => {
      if (html?.classList.contains('dark')) {
        header?.classList.add('dark-header');
        footer?.classList.add('dark-footer');

        for (let sidebar of sidebars) {
          sidebar?.classList.add('dark-sidebar');
        }
        
        for (let card of cards) {
          card?.classList.add('dark-card');
        }
      } else {
        header?.classList.remove('dark-header');
        footer?.classList.remove('dark-footer');

        for (let sidebar of sidebars) {
          sidebar?.classList.remove('dark-sidebar');
        }

        for (let card of cards) {
          card?.classList.remove('dark-card');
        }
      }
    }, 100);
    
  }

  setDrawerColor() {
    const element = document.querySelector('html');
    const sidebars = document.getElementsByClassName('sidebar');
    const header = document.getElementById('logo');
    const items = document.getElementsByClassName('sidebar-item');
    console.log('Items:', items);

    if (element?.classList.contains('dark')) {
      header?.classList.add('dark-header');

      for (let sidebar of sidebars) {
        sidebar?.classList.add('dark-sidebar');
      }

      for (let item of items) {
        item?.classList.add('dark-sidebar-item');
      }

    } else {
      header?.classList.remove('dark-header');

      for (let sidebar of sidebars) {
        sidebar?.classList.remove('dark-sidebar');
      }

      for (let item of items) {
        item?.classList.remove('dark-sidebar-item');
      }
    }
  }
}
