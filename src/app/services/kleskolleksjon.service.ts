import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlesProdukt } from '../models/kleskolleksjon.model';

@Injectable({
  providedIn: 'root'
})
export class KleskolleksjonServise {

  private jsonUrl = 'assets/kleskolleksjon/kleskolleksjon.json';

  constructor(private http: HttpClient) {}

  getProdukter(): Observable<KlesProdukt[]> {
    return this.http.get<KlesProdukt[]>(this.jsonUrl);
  }

}