import { Component } from '@angular/core';
import { OrangeHeaderComponent } from '../../_components/orange-header/orange-header.component';
import { DesignCardComponent } from '../../_components/design-card/design-card.component';
import { ViewProjectsCardComponent } from '../../_components/view-projects-card/view-projects-card.component';
import { Footer1Component } from '../../_components/footer-1/footer-1.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';
import { IDesignCard } from '../../_interfaces/IDesignCards';
import { IViewProjectsCard } from '../../_interfaces/IViewProjectsCard';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [OrangeHeaderComponent, DesignCardComponent, ViewProjectsCardComponent, Footer1Component, Footer2Component],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.scss'
})
export class GraphicDesignComponent {

  headerText = {
    title: 'Graphic Design',
    paragraph: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
  }

  graphicDesignCards: IDesignCard[] = [
    {
      img: '../../../assets/graphic-design/desktop/image-change.jpg',
      imgAlt: 'TIM BROWN',
      title: 'TIM BROWN',
      description: 'A book cover designed for Tim Brown’s new release, ‘Change’'
    },
    {
      img: '../../../assets/graphic-design/desktop/image-boxed-water.jpg',
      imgAlt: 'BOXED WATER',
      title: 'BOXED WATER',
      description: 'A simple packaging concept made for Boxed Water'
    },
    {
      img: '../../../assets/graphic-design/desktop/image-science.jpg',
      imgAlt: 'SCIENCE!',
      title: 'SCIENCE!',
      description: 'A poster made in collaboration with the Federal Art Project'
    },
  ];

  viewProjects: IViewProjectsCard[] = [
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
      title: 'web design',
      images: {
        mobile: '../../../assets/home/mobile/image-web-design.jpg',
        tablet: '../../../assets/home/tablet/image-web-design.jpg',
        desktop: '../../../assets/home/desktop/image-web-design-small.jpg'
      },
      url: '/web-design'
    }
  ]
}
