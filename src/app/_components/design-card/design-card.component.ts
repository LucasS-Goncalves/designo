import { Component } from '@angular/core';

@Component({
  selector: 'app-design-card',
  standalone: true,
  imports: [],
  templateUrl: './design-card.component.html',
  styleUrl: './design-card.component.scss'
})
export class DesignCardComponent {
  cardText: {img: string, imgAlt: string, title: string, description: string} = {img: '', imgAlt: '', title: '', description: ''};
}
