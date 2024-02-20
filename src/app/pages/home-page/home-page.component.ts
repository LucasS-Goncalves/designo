import { Component } from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
