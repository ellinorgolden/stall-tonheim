import { Component } from '@angular/core';
import { Hest } from '../../models/hester-ponnier.model';
import { HesterPonnierService } from './hester-ponnier.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hester-ponnier',
  standalone: true,
  templateUrl: './hester-ponnier.component.html',
  styleUrls: ['./hester-ponnier.component.scss'],
  imports: [
    CommonModule, 
    MatCardModule,
  ] ,
   providers: [
    HesterPonnierService
  ]
})

export class HesterPonnierComponent {

  hester: Hest[] = [];

  constructor(private hesterPonnierService: HesterPonnierService) {}

  ngOnInit(): void {
  this.hesterPonnierService.hentHester().subscribe({
    next: (data: Hest[]) => {
      this.hester = data;
    },
    error: (err) => console.error('Feil ved lasting av hester:', err)
  });
}


}
