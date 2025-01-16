import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Button } from 'primeng/button';
import { ScrollPanel } from 'primeng/scrollpanel';

import { GiftcardComponent } from '../components/giftcard/giftcard.component';

@Component({
  selector: 'app-home',
  imports: [Button, ScrollPanel, CommonModule, GiftcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: any [] = [0,1,2,3,4];
}