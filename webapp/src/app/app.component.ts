import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DrawerModule } from 'primeng/drawer';
import { DialogModule } from 'primeng/dialog';

import { DarkmodeService } from './services/darkmode/darkmode.service';
import { StorageService } from './services/storage/storage.service';

import { MetaMaskSDK } from '@metamask/sdk';
import { WalletService } from './services/wallet/wallet.service';
import { SpinnerService } from './services/spinner/spinner.service';

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
  connected: boolean | undefined = true;
  visible: boolean = false;
  show: boolean = false;
  dark: boolean | undefined = false;
  year: number = 2025;
  modes: any[] = [
    { label: 'Light', value: false },
    { label: 'Dark', value: true }
  ];

  constructor(
    private darkModeService: DarkmodeService,
    private storageService: StorageService,
    private walletService: WalletService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {
    this.walletService.connected();
    this.connected = sessionStorage.getItem('connected') == '1';
  }

  ngOnInit() {
    this.dark = this.getBoolValue(this.storageService.getItem('dark'));
    if (this.dark) {
      this.toggleDarkMode();
    }
    this.year = new Date().getFullYear();
  }

  async showDialog() {
    this.signIn();
  }

  showSidebar() {
    this.darkModeService.setDrawerColor();
  }

  async signIn() {
    await this.walletService.connect().then(() => {
      this.connected = this.walletService.connected();
    }).catch((e) => {
      console.log('Error:', e);
    });
  }

  signOut() {
    this.walletService.disconnect();
    this.connected = sessionStorage.getItem('connected') == '1';
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.dark = document.querySelector('html')?.classList.contains('dark');
    this.storageService.setItem('dark', this.dark);
  }

  getBoolValue(value: any) {
    return value?.toLowerCase() == 'true' ;
  }

  navigateToHome() {
    this.router.navigateByUrl('dashboard');
  }
}
