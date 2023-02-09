import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getUsuariosRedesSociales(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/grafica');
  }

  getUsuariosDataDona(): Observable<{ labels: string[]; values: number[] }> {
    return this.getUsuariosRedesSociales().pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data) as number[];
        return { labels, values };
      })
    );
  }
}
