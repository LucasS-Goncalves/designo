import { Component } from '@angular/core';
import { OrangeHeaderComponent } from '../../_components/orange-header/orange-header.component';
import { DesignCardComponent } from '../../_components/design-card/design-card.component';
import { ViewProjectsCardComponent } from '../../_components/view-projects-card/view-projects-card.component';
import { Footer1Component } from '../../_components/footer-1/footer-1.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';
import { IDesignCard } from '../../_interfaces/IDesignCards';
import { IViewProjectsCard } from '../../_interfaces/IViewProjectsCard';

@Component({
  selector: 'app-app-design',
  standalone: true,
  imports: [OrangeHeaderComponent, DesignCardComponent, ViewProjectsCardComponent, Footer1Component, Footer2Component],
  templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.scss'
})
export class AppDesignComponent {

  headerText = {
    title: 'App Design',
    paragraph: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
  }

  appDesignCards: IDesignCard[] = [
    {
      img: '../../../assets/app-design/desktop/image-airfilter.jpg',
      imgAlt: 'AIRFILTER',
      title: 'AIRFILTER',
      description: 'Solving the problem of poor indoor air quality by filtering the air'
    },
    {
      img: '../../../assets/app-design/desktop/image-eyecam.jpg',
      imgAlt: 'EYECAM',
      title: 'EYECAM',
      description: 'Product that lets you edit your favorite photos and videos at any time'
    },
    {
      img: '../../../assets/app-design/desktop/image-faceit.jpg',
      imgAlt: 'FACEIT',
      title: 'FACEIT',
      description: 'Get to meet your favorite internet superstar with the faceit app'
    },
    {
      img: '../../../assets/app-design/desktop/image-todo.jpg',
      imgAlt: 'TODO',
      title: 'TODO',
      description: 'A todo app that features cloud sync with light and dark mode'
    },
    {
      img: '../../../assets/app-design/desktop/image-loopstudios.jpg',
      imgAlt: 'LOOPSTUDIOS',
      title: 'LOOPSTUDIOS',
      description: 'A VR experience app made for Loopstudios'
    },
  ];

  viewProjects: IViewProjectsCard[] = [
    {
      title: 'web design',
      images: {
        mobile: '../../../assets/home/mobile/image-web-design.jpg',
        tablet: '../../../assets/home/tablet/image-web-design.jpg',
        desktop: '../../../assets/home/desktop/image-web-design-small.jpg'
      },
      url: '/web-design'
    },
    {
      title: 'graphic DESIGN',
      images: {
        mobile: '../../../assets/home/mobile/image-graphic-design.jpg',
        tablet: '../../../assets/home/tablet/image-graphic-design.jpg',
        desktop: '../../../assets/home/desktop/image-graphic-design.jpg'
      },
      url: '/graphic-design'
    }
  ]
}
