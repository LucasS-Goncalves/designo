import { Component, Input } from '@angular/core';
import { IViewProjectsCard } from '../../_interfaces/IViewProjectsCard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-projects-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-projects-card.component.html',
  styleUrl: './view-projects-card.component.scss'
})
export class ViewProjectsCardComponent {
  @Input() card: IViewProjectsCard = {
    title: 'Web Design',
    images: {
      mobile: '../../../assets/home/mobile/image-app-design.jpg',
      tablet: '../../../assets/home/tablet/image-app-design.jpg',
      desktop: '../../../assets/home/desktop/image-web-design-large.jpg'
    }};

  @Input() largest = false;
}
