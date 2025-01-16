import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Button } from 'primeng/button';
import { ScrollPanel } from 'primeng/scrollpanel';

import { GiftcardComponent } from '../components/giftcard/giftcard.component';

@Component({
  selector: 'app-dashboard',
  imports: [Button, ScrollPanel, CommonModule, GiftcardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards: any [] = [0,1,2,3,4];
}
