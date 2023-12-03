import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-card',
  templateUrl: './card-card.component.html',
  styleUrls: ['./card-card.component.css']
})
export class CardCardComponent {
  @Input() carData:any;
}
