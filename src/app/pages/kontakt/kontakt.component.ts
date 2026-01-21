import { Component } from '@angular/core';
import { BookingLeafSnarveiComponent } from "../../components/produkt-detalj/booking-leaf-snarvei/booking-leaf-snarvei.component";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
  imports: [BookingLeafSnarveiComponent]
})

export class KontaktComponent {
}
