import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-leaf-snarvei',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-leaf-snarvei.component.html',
  styleUrls: ['./booking-leaf-snarvei.component.scss']
})
export class BookingLeafSnarveiComponent {
  @Input() tekst = 'Besøk Bookingleaf';
  @Input() url = 'https://www.bookingleaf.com/pages/stalltonheim';
}