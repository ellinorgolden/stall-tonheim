import { Component } from '@angular/core';
import { KleskolleksjonServise } from '../../services/kleskolleksjon.service';
import { KlesProdukt } from '../../models/kleskolleksjon.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kleskolleksjon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kleskolleksjon.component.html',
  styleUrls: ['./kleskolleksjon.component.scss']
})
export class KleskolleksjonComponent  {


  produkter: KlesProdukt[] = [];

  constructor(
    private kleskolleksjonService: KleskolleksjonServise,
    private router: Router
  ) { }

  aapneProduktSide(slug: string): void {
    this.router.navigate(['/klesprodukt', slug]);
  }

  ngOnInit(): void {
    this.kleskolleksjonService.getProdukter().subscribe(produkter => {
      this.produkter = produkter;
    });
  }
}