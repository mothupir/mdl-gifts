import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key.toLowerCase(), value);
  }

  getItem(key: string) {
    return localStorage.getItem(key.toLowerCase());
  }

  removeItem(key: string) {
    localStorage.removeItem(key.toLowerCase());
  }

  clearItems() {
    localStorage.clear();
  }
}
