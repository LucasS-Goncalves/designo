import { Component } from '@angular/core';
import { Footer1Component } from '../../_components/footer-1/footer-1.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';
import { OrangeHeaderComponent } from '../../_components/orange-header/orange-header.component';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [Footer1Component, Footer2Component, OrangeHeaderComponent],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {

}
