import { Component, Input } from '@angular/core';
import { IViewProjectsCard } from '../../_interfaces/IViewProjectsCard';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-projects-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-projects-card.component.html',
  styleUrl: './view-projects-card.component.scss'
})
export class ViewProjectsCardComponent {
  @Input() card: IViewProjectsCard = {
    title: '',
    images: {
      mobile: '',
      tablet: '',
      desktop: ''
    },
    url: ''
  };

  @Input() largest = false;
}
