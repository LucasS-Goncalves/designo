import { Component } from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { Footer2Component } from '../../_components/footer-2/footer-2.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, Footer2Component],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
