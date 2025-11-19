import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RideKursComponent } from './pages/ride-kurs/ride-kurs.component';
import { HesterPonnierComponent } from './pages/hester-ponnier/hester-ponnier.component';
import { KleskolleksjonComponent } from './pages/kleskolleksjon/kleskolleksjon.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { AnsatteComponent } from './pages/ansatte/ansatte.component';

export const routes: Routes = [
  { 
    path: '',
    component: HomeComponent, 
    title: 'Stall Tonheim' 
},
  { 
    path: 'ride-kurs', 
    component: RideKursComponent, 
    title: 'Ridekurs – Stall Tonheim' 
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