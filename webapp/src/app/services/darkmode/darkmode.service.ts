import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  isDark: boolean = false;

  constructor() {
    const element = document.querySelector('html');
    if (element?.classList.contains('dark')) {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
    this.isDark = this.isDark ? false : true;
  }
}
