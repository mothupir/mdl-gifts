import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Button } from 'primeng/button';

@Component({
  selector: 'app-giftcard',
  imports: [Button, CommonModule],
  templateUrl: './giftcard.component.html',
  styleUrl: './giftcard.component.css'
})
export class GiftcardComponent {
}
