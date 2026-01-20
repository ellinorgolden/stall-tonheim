import { Component } from '@angular/core';
import { KleskolleksjonServise } from '../../services/kleskolleksjon.service';
import { KlesProdukt } from '../../models/kleskolleksjon.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProduktDetaljComponent } from '../../components/produkt-detalj/produkt-detalj.component';

@Component({
  selector: 'app-produkt-side',
  standalone: true,
  imports: [CommonModule, ProduktDetaljComponent],
  template: `
    <app-produkt-detalj
      *ngIf="produkt"
      [produkt]="produkt">
    </app-produkt-detalj>
  `
})

export class ProduktSideComponent {
  produkt?: KlesProdukt;

  constructor(
    private route: ActivatedRoute,
    private service: KleskolleksjonServise,
  ) {
    }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.service.getProdukter().subscribe(produkter => {
      this.produkt = produkter.find(p => p.slug === slug);
    });
  }


}