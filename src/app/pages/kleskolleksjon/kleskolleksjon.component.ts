import { Component } from '@angular/core';
import { KleskolleksjonServise } from './kleskolleksjon.service';
import { KlesProdukt } from '../../models/kleskolleksjon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kleskolleksjon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kleskolleksjon.component.html',
  styleUrls: ['./kleskolleksjon.component.scss']
})
export class KleskolleksjonComponent  {


    produkter: KlesProdukt[] = [];

  constructor(private kleskolleksjonService: KleskolleksjonServise) { }

  ngOnInit(): void {
    this.kleskolleksjonService.getProdukter().subscribe(produkter => {
      this.produkter = produkter;
    });
  }
}