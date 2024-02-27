import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-1.component.html',
  styleUrl: './footer-1.component.scss'
})
export class Footer1Component {
  @Input() contactPage = false;
}
