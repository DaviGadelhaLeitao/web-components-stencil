import { Component } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
@Component({
    tag: 'uc-stock-finder',
    styleUrl: './stock-finder.css',
    shadow: true
})
export class StockFinder {
    stockNameInput: HTMLInputElement;

    onFindStocks(event: Event) {
        event.preventDefault();
        const stockName = this.stockNameInput.value;
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
        .then(res => res.json())
        .then(parsedResponse => {
            console.log(parsedResponse);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return [
            <form onSubmit={this.onFindStocks.bind(this)}>
                <input
                    id="stock-symbol"
                    ref={el => this.stockNameInput = el}
                    type="text"
                />
                <button type="submit">
                    Find!
                </button>
            </form>
        ];
    }
}