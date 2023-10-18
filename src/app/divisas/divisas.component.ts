import { Component } from '@angular/core';
import { Divisas } from './divisas';
import { DivisasService } from './divisas.service';
import { TipoCambio } from './tipocambio';


@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {

  divisas: Divisas[];
  divisaSelecionada: Divisas;
  divisaConvertida: TipoCambio;
  monto: number = 0;

  constructor(private divisaService: DivisasService){}

  ngOnInit():void{
    this.divisaService.getDivisas().subscribe(d => {
      this.divisas=d;
      this.divisaSelecionada = this.divisas[0];
    });
    
  }

  conversionDivisas(divisaSelecionada: Divisas): any{
    this.divisaService.getExchangeRate(divisaSelecionada.currencyOrigin, divisaSelecionada.currencyDestination,this.monto).subscribe(d =>{
      this.divisaConvertida = d;
    })
  }

}
