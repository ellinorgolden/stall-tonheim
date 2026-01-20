import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { KlesProdukt } from "../../models/kleskolleksjon.model";
import { Router, ActivatedRoute } from '@angular/router';
import {ChangeDetectionStrategy, signal} from '@angular/core';

@Component({
  selector: 'app-produkt-detalj',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produkt-detalj.component.html',
  styleUrls: ['./produkt-detalj.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProduktDetaljComponent {

  @Input() produkt!: KlesProdukt;

  barneStørrelser = ['110/120', '130/140', '150/160'];
  voksenStørrelser = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL'];

  TRYKK_PRIS = 100;
  BRODERING_PRIS = 175;

  feilmelding = '';

  valgtStoorrelse?: string;
  navnPaaPlagg: string = '';
  antall: number = 1;
  slug: string;
  brodering: boolean = false;
  trykk: boolean = false;
  sum: number = 0;

  
  readonly panelOpenState = signal(false);
  
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug') ?? '';
  }

leggIKurv() {
  this.feilmelding = '';

  if (!this.valgtStoorrelse) {
    this.feilmelding = 'Du må velge størrelse.';
    return;
  }

  if ((this.trykk || this.brodering) && !this.navnPaaPlagg.trim()) {
    this.feilmelding = 'Du må skrive inn tekst til trykk eller brodering.';
    return;
  }

  const grunnpris = this.hentGrunnpris(this.valgtStoorrelse);

  const tillegg =
    (this.trykk ? this.TRYKK_PRIS : 0) +
    (this.brodering ? this.BRODERING_PRIS : 0);

  const handlekurvProdukt = {
    slug: this.slug,
    tittel: this.produkt.tittel,
    bilde: this.produkt.bilde,

    størrelse: this.valgtStoorrelse,
    antall: this.antall,

    navnPaaPlagg: this.navnPaaPlagg,
    trykk: this.trykk,
    brodering: this.brodering,

    grunnpris,
    tillegg,
    stykkpris: grunnpris + tillegg,
    totalPris: this.sum
  };

  console.log('Legg i handlekurv:', handlekurvProdukt);
  this.resetValg();
}

  tilbakeTilKolleksjon() {
    this.router.navigate(['/kleskolleksjon']);
  }

  formaterNavn(value: string) {
  if (!value) {
    this.navnPaaPlagg = '';
    return;
  }
  const words = value.split(' ').filter(w => w.length > 0);
  const formatted = words
    .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  this.navnPaaPlagg = formatted;
}


  onTrykkEndret() {
    if (this.trykk) {
      this.brodering = false;
    }
    this.oppdaterSum();
  }

  onBroderingEndret() {
    if (this.brodering) {
      this.trykk = false;
    }
    this.oppdaterSum();
  }

  hentGrunnpris(valgtStoorrelse?: string): number {
    if (!valgtStoorrelse) {
      return 0;
    }

    if (this.voksenStørrelser.includes(valgtStoorrelse)) {
      return this.produkt.prisVoksen ?? 0;
    }

    return this.produkt.prisBarn ?? this.produkt.prisVoksen ?? 0 ;
  }

  oppdaterSum() {
    let total = this.hentGrunnpris(this.valgtStoorrelse ?? '');

    if (this.trykk) {
      total += this.TRYKK_PRIS;
    }

    if (this.brodering) {
      total += this.BRODERING_PRIS;
    }

    this.sum = total * this.antall;
  }

  resetValg() {
  this.valgtStoorrelse = undefined;
  this.navnPaaPlagg = '';
  this.antall = 1;

  this.trykk = false;
  this.brodering = false;

  this.sum = 0;
  this.feilmelding = '';
}

}