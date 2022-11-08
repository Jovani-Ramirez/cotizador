import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDataCotizacion } from '../interfaces/cotizacion.interface';
import { IDistribuidoresData } from '../interfaces/distribuidores.interface';

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  public url: string;

  constructor(
    public http: HttpClient
  ) {
    this.url = environment.API_URL;
   }

   getPages(): Observable<any> {
    return this.http.get<IDistribuidoresData>(`${this.url}/distribuidores`);
   }

   sendCotizacion(data: any): Observable<any> {
    return this.http.post<IDataCotizacion>(`${this.url}/cotizacion`, data)
   }
}
