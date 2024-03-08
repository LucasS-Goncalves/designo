import { Component } from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';
import { Footer1Component } from '../../_components/footer-1/footer-1.component';
import { ViewProjectsCardComponent } from '../../_components/view-projects-card/view-projects-card.component';
import { IViewProjectsCard } from '../../_interfaces/IViewProjectsCard';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, Footer1Component, Footer2Component, ViewProjectsCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  cards: IViewProjectsCard[] = [
    {
      title: 'WEB DESIGN',
      images: {
        mobile: '../../../assets/home/mobile/image-web-design.jpg',
        tablet: '../../../assets/home/tablet/image-web-design.jpg',
        desktop: '../../../assets/home/desktop/image-web-design-large.jpg'
      },
      url: '/web-design'
    },
    {
      title: 'APP DESIGN',
      images: {
        mobile: '../../../assets/home/mobile/image-app-design.jpg',
        tablet: '../../../assets/home/tablet/image-app-design.jpg',
        desktop: '../../../assets/home/desktop/image-app-design.jpg'
      },
      url: '/app-design'
    },
    {
      title: 'GRAPHIC DESIGN',
      images: {
        mobile: '../../../assets/home/mobile/image-graphic-design.jpg',
        tablet: '../../../assets/home/tablet/image-graphic-design.jpg',
        desktop: '../../../assets/home/desktop/image-graphic-design.jpg'
      },
      url: '/graphic-design'
    }
  ];
}
