import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Hest } from '../../models/hester-ponnier.model';

@Injectable({
  providedIn: 'root'
})
export class HesterPonnierService {

  private jsonUrl = 'assets/hester-ponnier/hester-ponnier.json';

  constructor(private http: HttpClient) {}

    hentHester(): Observable<Hest[]> {
    return this.http.get<Hest[]>(this.jsonUrl).pipe(
        map((hester: Hest[]) =>
        hester.map((hest: Hest) => ({
            ...hest,
        }))
        )
    );
    }
}