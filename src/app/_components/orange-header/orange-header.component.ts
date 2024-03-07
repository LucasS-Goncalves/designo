import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orange-header',
  standalone: true,
  imports: [],
  templateUrl: './orange-header.component.html',
  styleUrl: './orange-header.component.scss'
})
export class OrangeHeaderComponent {
  @Input() text: {title: string, paragraph: string} = {
    title: '',
    paragraph: ''
  }
}
