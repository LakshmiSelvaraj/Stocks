import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  symbols: Array<string>;
  stockSymbol: string;
  constructor(private stockService: StocksService) {
    this.symbols = stockService.get();
  }

  add() {
    this.symbols = this.stockService.add(this.stockSymbol.toUpperCase());
    this.stockSymbol = '';
  }

  remove(symbol: string) {
    this.symbols = this.stockService.remove(symbol.toUpperCase());
  }

}
