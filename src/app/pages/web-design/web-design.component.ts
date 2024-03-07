import { Component } from '@angular/core';
import { Footer1Component } from '../../_components/footer-1/footer-1.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';
import { OrangeHeaderComponent } from '../../_components/orange-header/orange-header.component';
import { DesignCardComponent } from '../../_components/design-card/design-card.component';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [Footer1Component, Footer2Component, OrangeHeaderComponent, DesignCardComponent],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {
  headerText = {
    title: 'Web Design',
    paragraph: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
  }
}
