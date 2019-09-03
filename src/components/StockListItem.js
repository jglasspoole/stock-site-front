import React, { Component } from 'react'
import PropTypes from 'prop-types';

function countDecimals(number) {
    if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
    return number.toString().split(".")[1].length || 0; 
}

function renderPrice(priceVal) {
  if(countDecimals(priceVal) < 2)
    return '$ ' + priceVal.toFixed(2);
  else 
    return '$ ' + priceVal;
}


export class StockListItem extends Component {
  render() {
    return (
      <div>
        {this.props.stockData.ticker}:{this.props.stockData.exchange} - {renderPrice(this.props.stockData.lastPrice)}
      </div>
    );
  }
}

// PropTypes
StockListItem.propTypes = {
  stockData: PropTypes.object.isRequired,
}

export default StockListItem;
