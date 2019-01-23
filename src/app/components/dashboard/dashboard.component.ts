import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  symbols: Array<string>;
  stocks: Array<StockInterface>;

  constructor(private stocksService: StocksService) {
    this.symbols = stocksService.get();
  }

  ngOnInit() {
    this.stocksService.load(this.symbols).subscribe(stocks => {
      this.stocks = stocks;
    });
  }

}
