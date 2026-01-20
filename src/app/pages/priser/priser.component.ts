import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { BookingLeafSnarveiComponent } from '../../components/produkt-detalj/booking-leaf-snarvei/booking-leaf-snarvei.component';

interface Priser {
  tjeneste: string;
  info?: string;
  lesMerTekst?: string;
  lesMerLink?: string;
  prisOversikt: PrisOversikt[]
}

interface PrisOversikt {
  type: string;
  pris: string;
}

@Component({
  selector: 'app-priser',
  standalone: true,     
  templateUrl: './priser.component.html',
  styleUrls: ['./priser.component.scss'],
    imports: [
    CommonModule, 
    MatTableModule,
    MatCardModule,
    RouterModule,
    BookingLeafSnarveiComponent
  ] 
})

export class PriserComponent {


Priser: Priser[] = [
  {
    tjeneste: 'Rideskolekurs',
    info: 'Vi tilbyr rideskolekurs for nybegynnere, øvet viderekommende. Hvert kurs går over ca 10 uker med en ridetime per uke, men kan variere noe med høytider og ferier. Oppgitt kurs pris er pr kurs.',
    lesMerLink: '/ride-kurs',
    lesMerTekst: 'Se oversikt over våre rideskolekurs her',
    prisOversikt: [
      { type: '1 kurs (ca 10 ridetimer)', pris: '415 kr pr time (ca 4150kr)' }
    ]
  },
    {
    tjeneste: 'Langtur',
    info: 'Ved kapasitet tilbys flotte langturer tur som går gjennom skog og på fine grusveier. Nybegynnere får leiere. Viderekommende kan få galoppere der det er trygt. I pakken inngår ca 90 min å ri + 45 min stell.',
    prisOversikt: [
      { type: 'Langtur', pris: '725 kr' }
    ]
  },
  { 
    tjeneste: 'Ridetimer',
    prisOversikt: [
      { type: 'Klippekort (10 klipp)', pris: '4750 kr' },
      { type: 'Drop-in hverdag', pris: '415 kr' },
      { type: 'Drop-in lørdag', pris: '525 kr' },
      { type: 'Privattime', pris: '725 kr' }
    ],
  },
  {
    tjeneste: 'Rideleir',
    info:'',
    prisOversikt: [
      { type: 'Sommerleir', pris: '6700 kr' },
      { type: 'Treningsleir', pris: '7300 kr' },
      { type: 'Høstferieleir', pris: '6700 kr' },
      { type: 'Vinterferieleir', pris: '6700 kr' },
      { type: 'Påskeleir', pris: '4250 kr' }
    ]
  }
]


}
