import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient: HttpClient) { }

  get(): Array<string> {
    return stocks.slice();
  }

  add(stock: string): Array<string> {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string): Array<string> {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>) {
    if (symbols) {
      return this.httpClient.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
