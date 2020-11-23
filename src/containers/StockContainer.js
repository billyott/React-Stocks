import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
      let filteredStocks = this.props.stocks
      if (this.props.filterType) {
        filteredStocks = this.props.stocks.filter(stock => stock.type === this.props.filterType)
      }
      if (this.props.sortType === 'Alphabetically') {
        filteredStocks.sort(function(a, b) {
          let textA = a.name.toUpperCase()
          let textB = b.name.toUpperCase()
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        return filteredStocks.map(stock => <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick} />)
      } else if (this.props.sortType === 'Price') {
        filteredStocks.sort(function(a, b) {
          let priceA = a.price
          let priceB = b.price
          return (priceA < priceB) ? -1 : (priceA > priceB) ? 1 : 0;
        });
        return filteredStocks.map(stock => <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick} />)
      } else {
        return filteredStocks.map(stock => <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick} />)
      }
  }  

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
