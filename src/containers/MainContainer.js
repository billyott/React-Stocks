import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sortType: '',
    filterType: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks: stocks})) 
  }

  handleAddToPortfolio = (stock) => {
    this.setState(prevState => {
      return {portfolio: [...prevState.portfolio, stock]}
    })
  }

  handleSellStock = (stock) => {
    this.setState(prevState => {
      const matchedStockIndex = prevState.portfolio.map(function(e) { return e.id; }).indexOf(stock.id)
      prevState.portfolio.splice(matchedStockIndex, 1)
      return ({portfolio: prevState.portfolio})
    })
  }

  handleFilter = (filterType) => {
    this.setState({filterType: filterType})
  }

  handleSort = (sortType) => {
    this.setState({sortType: sortType})
  }

  render() {
    return (
      <div>
        <SearchBar sortType={this.state.sortType} filterType={this.state.filterType} handleFilter={this.handleFilter} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} filterType={this.state.filterType} sortType={this.state.sortType} handleClick={this.handleAddToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleSellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
