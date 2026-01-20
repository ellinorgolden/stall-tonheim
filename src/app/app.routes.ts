import { Routes } from '@angular/router';
import { HjemComponent } from './pages/hjem/hjem.component';
import { RideKursComponent } from './pages/ride-kurs/ride-kurs.component';
import { HesterPonnierComponent } from './pages/hester-ponnier/hester-ponnier.component';
import { KleskolleksjonComponent } from './pages/kleskolleksjon/kleskolleksjon.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { AnsatteComponent } from './pages/ansatte/ansatte.component';
import { PriserComponent } from './pages/priser/priser.component';


export const routes: Routes = [
  { 
    path: '',
    component: HjemComponent, 
    title: 'Stall Tonheim' 
},
  { 
    path: 'ride-kurs', 
    component: RideKursComponent, 
    title: 'Ridekurs – Stall Tonheim' 
},
  { 
    path: 'priser', 
    component: PriserComponent, 
    title: 'Priser – Stall Tonheim' 
},
  { 
    path: 'hester-ponnier', 
    component: HesterPonnierComponent, 
    title: 'Hester & ponnier – Stall Tonheim' 
},
  { 
    path: 'kleskolleksjon', 
    component: KleskolleksjonComponent, 
    title: 'Kleskolleksjon – Stall Tonheim' 
},
  {
    path: 'klesprodukt/:slug',
    loadComponent: () =>
      import('./pages/produkt-side/produkt-side.component')
        .then(m => m.ProduktSideComponent),
    title: 'Produkt – Stall Tonheim',
  },
  { 
    path: 'ansatte', 
    component: AnsatteComponent, 
    title: 'Ansatte – Stall Tonheim' 
},
  { 
    path: 'kontakt', 
    component: KontaktComponent, 
    title: 'Kontakt – Stall Tonheim' 
},
  { path: '**', 
    redirectTo: '' 
},
];