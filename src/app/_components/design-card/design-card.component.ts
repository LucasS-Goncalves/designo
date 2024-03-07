import { Component, Input } from '@angular/core';
import { IDesignCard } from '../../_interfaces/IDesignCards';

@Component({
  selector: 'app-design-card',
  standalone: true,
  imports: [],
  templateUrl: './design-card.component.html',
  styleUrl: './design-card.component.scss'
})
export class DesignCardComponent {
  @Input() cardText: IDesignCard = {img: '', imgAlt: '', title: '', description: ''};
}
