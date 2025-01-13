import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkmodeService } from './services/darkmode/darkmode.service';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SelectButton, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MDL Gifts';
  dark: boolean = false;
  year: number = 2025;
  modes: any[] = [
    { label: 'Light', value: false },
    { label: 'Dark', value: true }
  ];

  constructor(private darkModeService: DarkmodeService, private storageService: StorageService) {
    this.dark = this.getBoolValue(storageService.getItem('dark'));
    if (this.dark) {
      this.toggleDarkMode();
    }
    this.year = new Date().getFullYear();
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
    this.dark = this.darkModeService.isDark;
    this.storageService.setItem('dark', this.dark);
  }

  getBoolValue(value: any) {
    return value?.toLowerCase() == 'true' ;
  }
}
