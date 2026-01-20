import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { BookingLeafSnarveiComponent } from "../../components/produkt-detalj/booking-leaf-snarvei/booking-leaf-snarvei.component";

interface Ridetime {
  klokkeslett: string;
  datetime: string;
  gruppe: string;
}

interface Ridedag {
  dag: string;
  info?: string;
  timer: Ridetime[];
}

@Component({
  selector: 'app-ride-kurs',
  standalone: true,     
  templateUrl: './ride-kurs.component.html',
  styleUrls: ['./ride-kurs.component.scss'],
    imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    BookingLeafSnarveiComponent
] 
})

export class RideKursComponent {

ridedager: Ridedag[] = [
  {
    dag: 'Mandager',
    timer: [
      { klokkeslett: 'kl. 16.30', datetime: '16:30', gruppe: 'Nybegynnere / Lett øvet' },
      { klokkeslett: 'kl. 18.00', datetime: '18:00', gruppe: 'Lett øvet / Øvet' },
      { klokkeslett: 'kl. 19.30', datetime: '19:30', gruppe: 'Voksen kurs (alle nivåer)' }
    ]
  },
  {
    dag: 'Tirsdager',
    timer: [
      { klokkeslett: 'kl. 16.30', datetime: '16:30', gruppe: 'Nybegynnere / Lett øvet' },
      { klokkeslett: 'kl. 18.00', datetime: '18:00', gruppe: 'Lett øvet / Øvet' },
      { klokkeslett: 'kl. 19.30', datetime: '19:30', gruppe: 'Øvede / Viderekomne' }
    ]
  },
  {
    dag: 'Onsdager',
    timer: [
      { klokkeslett: 'kl. 11.00', datetime: '10:00', gruppe: 'Voksen kurs (alle nivåer)'},
      { klokkeslett: 'kl. 16.30', datetime: '16:30', gruppe: 'Nybegynnere / Lett øvet' },
      { klokkeslett: 'kl. 18.00', datetime: '18:00', gruppe: 'Lett øvet / Øvet' },
      { klokkeslett: 'kl. 18.30', datetime: '18:30', gruppe: 'Øvet / Viderekomne' }
    ]
  },
  {
    dag: 'Torsdager',
    timer: [
      { klokkeslett: 'kl. 16.30', datetime: '16:30', gruppe: 'Nybegynnere / Lett øvet' },
      { klokkeslett: 'kl. 18.00', datetime: '18:00', gruppe: 'Lett øvet / Øvet' },
      { klokkeslett: 'kl. 19.30', datetime: '19:30', gruppe: 'Øvet / Viderekomne' }
    ]
  },
  {
    dag: 'Fredager',
    info:'På fredager er det mulig å opprette foravtale for elever av rideskolen, ta kontakt eller se bookingleaf for tilgjengelige foravtaler.',
    timer: [
      { klokkeslett: 'kl. 11.00', datetime: '11:00', gruppe: 'Voksen kurs (alle nivåer)' }
    ]
  },
  {
    dag: 'Lørdager',
    info: 'På lørdager har vi enkle varierende ridetimer som alle kan melde seg på, følg med på bookingLeaf eller sosiale medier for oppdateringer.',
    timer: [
      { klokkeslett: 'kl. 09.15', datetime: '09:15', gruppe: 'Nybegynner – øvet' },
      { klokkeslett: 'kl. 10.45', datetime: '10:45', gruppe: 'Nybegynner – øvet' },
      { klokkeslett: 'kl. 13.30', datetime: '13:30', gruppe: 'Lett øvet – øvet' },
      { klokkeslett: 'kl. 15.00', datetime: '15:00', gruppe: 'Lett øvet – viderekommen' },
      { klokkeslett: 'kl. 16.30', datetime: '16:30', gruppe: 'Øvet – viderekommen' }
    ]
  },
  {
    dag: 'Søndager',
    info: 'Søndager er det stengt!',
    timer: []
  }
];

visteKolonner = ['klokkeslett', 'gruppe'];


}
