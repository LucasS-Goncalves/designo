import { Component } from '@angular/core';
import { Footer1Component } from '../../_components/footer-1/footer-1.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';
import { OrangeHeaderComponent } from '../../_components/orange-header/orange-header.component';
import { DesignCardComponent } from '../../_components/design-card/design-card.component';
import { IDesignCard } from '../../_interfaces/IDesignCards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [CommonModule, Footer1Component, Footer2Component, OrangeHeaderComponent, DesignCardComponent],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {
  headerText = {
    title: 'Web Design',
    paragraph: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
  }

  designCards: IDesignCard[] = [
    {
      img: '../../../assets/web-design/desktop/image-express.jpg',
      imgAlt: 'Express',
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      img: '../../../assets/web-design/desktop/image-transfer.jpg',
      imgAlt: 'Transfer',
      title: 'Transfer',
      description: 'Site for low-cost money transfers and sending money within seconds'
    },
    {
      img: '../../../assets/web-design/desktop/image-photon.jpg',
      imgAlt: 'Photon',
      title: 'Photon',
      description: 'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    {
      img: '../../../assets/web-design/desktop/image-builder.jpg',
      imgAlt: 'BUILDER',
      title: 'BUILDER',
      description: 'Connects users with local contractors based on their location'
    },
    {
      img: '../../../assets/web-design/desktop/image-blogr.jpg',
      imgAlt: 'BLOGR',
      title: 'BLOGR',
      description: 'Blogr is a platform for creating an online blog or publication'
    },
    {
      img: '../../../assets/web-design/desktop/image-camp.jpg',
      imgAlt: 'CAMP',
      title: 'CAMP',
      description: 'Get expert training in coding, data, design, and digital marketing'
    },
  ];
}
