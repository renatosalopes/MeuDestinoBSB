import { Component } from '@angular/core';
import * as parada from '../../assets/data/paradas.json';

@Component({
  selector: 'app-parada',
  templateUrl: 'parada.page.html',
  styleUrls: ['parada.page.scss']
})
export class ParadaPage {

  paradasArray: any = (parada as any).default;
  paradas: any = [];

  constructor() {}

  ngOnInit() {
    this.getParadas(15);
  }

  getParadas(quantidade) {
    for (let i = 0; i < quantidade; i++) {
      this.paradas.push(this.paradasArray.features[i]);
    }
  }

  getNomeParada(parada: any) {
    return parada.properties.descricao;
  }

}
