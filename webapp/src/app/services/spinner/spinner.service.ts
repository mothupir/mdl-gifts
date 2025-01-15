import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  show() {
    const element = document.getElementById('spinner');
    if (element) {
      element.style.display = 'block';
    }
  }

  hide() {
    const element = document.getElementById('spinner');
    if (element) {
      element.style.display = 'none';
    }
  }
}
