import React from 'react';

class SearchBar extends React.Component {

  localHandleFilter = (e) => {
    this.props.handleFilter(e.target.value)
  }

  localHandleSort = (e) => {
    this.props.handleSort(e.target.value)
  }
  
  render() {
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.props.sortType === 'Alphabetically'} onChange={this.localHandleSort}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.sortType === 'Price'} onChange={this.localHandleSort}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.localHandleFilter}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}


export default SearchBar;
