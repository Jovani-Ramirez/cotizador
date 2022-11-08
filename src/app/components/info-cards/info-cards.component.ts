import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})
export class InfoCardsComponent implements OnInit {

  public cards: any[];

  constructor() {

    this.cards = [
      { name: 'Smart Gas', description: 'Tarjeta siempre cargada psrs pagar y deducir tu gasto de combustible.' },
      { name: 'Smart Gas', description: 'Tarjeta siempre cargada psrs pagar y deducir tu gasto de combustible.' },
      { name: 'Smart Gas', description: 'Tarjeta siempre cargada psrs pagar y deducir tu gasto de combustible.' },
      { name: 'Smart Gas', description: 'Tarjeta siempre cargada psrs pagar y deducir tu gasto de combustible.' }
    ]
  }

  ngOnInit(): void {
  }

}
