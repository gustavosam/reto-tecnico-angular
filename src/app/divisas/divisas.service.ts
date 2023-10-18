import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Divisas } from './divisas';
import { TipoCambio } from './tipocambio';


@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  private urlGetExchangeDetails:string="http://localhost:8098/api/exchange-rate/detail";
  private urlGetgetExchangeRate:string="http://localhost:8098/api/exchange-rate"

  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"});

  private _access_token: string;

  constructor(private http: HttpClient) { }

  getDivisas(): Observable<Divisas[]>{
    return this.http.get<Divisas[]>(this.urlGetExchangeDetails, {headers: this.agregarAutorization()});
  }

  getExchangeRate(monedaOrigen:string, monedaDestino:string, monto:number): Observable<TipoCambio>{


    const params = new HttpParams()
      .set('fromCurrency', monedaOrigen)
      .set('toCurrency', monedaDestino)
      .set('amount', monto);

    return this.http.get<TipoCambio>(this.urlGetgetExchangeRate, {params, headers: this.agregarAutorization()} );
  }

  get access_token(): string {
    return this._access_token;
  }

  set access_token(value: string) {
    this._access_token = value;
  }

  private agregarAutorization(){
    return this.httpHeaders.append('Authorization', 'Bearer '+ this._access_token);
  }
}
