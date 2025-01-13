import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DrawerModule } from 'primeng/drawer';
import { DialogModule } from 'primeng/dialog';

import { DarkmodeService } from './services/darkmode/darkmode.service';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, CommonModule, FormsModule, 
    ButtonModule, SelectButtonModule, DrawerModule, DialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MDL Gifts';
  connected: boolean = true;
  visible: boolean = false;
  show: boolean = false;
  dark: boolean | undefined = false;
  year: number = 2025;
  modes: any[] = [
    { label: 'Light', value: false },
    { label: 'Dark', value: true }
  ];
  wallets: any[] = [
    { label: 'MetaMask' },
    { label: 'Trust Wallet' }
  ];
  selectedWallet = null;

  constructor(private darkModeService: DarkmodeService, private storageService: StorageService) {
    
  }

  ngOnInit() {
    this.dark = this.getBoolValue(this.storageService.getItem('dark'));
    if (this.dark) {
      this.toggleDarkMode();
    }
    this.year = new Date().getFullYear();
  }

  selectWallet(wallet: any) {
    this.selectedWallet = wallet;
  }

  showDialog() {
    this.show = true;
  }

  showSidebar() {
    this.darkModeService.setDrawerColor();
  }

  toggleSignIn() {
    this.connected = this.connected == false;
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.dark = document.querySelector('html')?.classList.contains('dark');
    this.storageService.setItem('dark', this.dark);
  }

  getBoolValue(value: any) {
    return value?.toLowerCase() == 'true' ;
  }
}
