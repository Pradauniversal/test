
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private apiUrl = 'https://www.datos.gov.co/resource/xdk5-pm3f.json';

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response)
    );
  }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?$select=departamento&$group=departamento`).pipe(
      map(response => response)
    );
  }
}
