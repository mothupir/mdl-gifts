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
    const sidebar = document.getElementById('sidebar');
    const footer = document.getElementById('footer');
    const cards = document.getElementsByClassName('card');

    setTimeout(() => {
      if (html?.classList.contains('dark')) {
        header?.classList.add('dark-header');
        sidebar?.classList.add('dark-sidebar');
        footer?.classList.add('dark-footer');
        for (let card of cards) {
          card?.classList.add('dark-card');
        }
        console.log(cards);
      } else {
        header?.classList.remove('dark-header');
        sidebar?.classList.remove('dark-sidebar');
        footer?.classList.remove('dark-footer');
        for (let card of cards) {
          card?.classList.remove('dark-card');
        }
      }
    }, 100);
    
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
