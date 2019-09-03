import React, { Component } from 'react'
import StockListItem from './StockListItem';
import PropTypes from 'prop-types';

export class StockListDisplay extends Component {

  renderStockList = () => {
    return (
      this.props.stockDataArray.map((stockData) => (
      <StockListItem key={stockData.symbolId} stockData={stockData} /> ))
    );
  }

  render() {
    return ( 
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Fresh 52 Week Highs</h3>
        </div>
        <div className="panel-body scrollable-panel">
          {this.renderStockList()}
        </div>
      </div>
    );
  }
}

// PropTypes
StockListDisplay.propTypes = {
  stockDataArray: PropTypes.array.isRequired
}

export default StockListDisplay;
