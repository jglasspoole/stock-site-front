import React, { Component } from 'react';
import StockListDisplay from './StockListDisplay';
import axios from 'axios';

export class Fresh52Interface extends Component {
  state = {
    fresh52Highs: [],
    fresh52Lows: [],
    dataDateTime: ""
  }

  componentDidMount() {
    axios.get('http://localhost:9090/get_scrape')
      .then((res) => {

        this.setState({ fresh52Highs: res.data.stockData })
      }
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <div className="row"><button className="btn btn-block text-center freshGreen">Fresh 52 Week Highs</button></div>
          <div className="row"><button className="btn btn-block text-center freshRed">Fresh 52 Week Lows</button></div>
        </div>
        <div className="col-md-6 col-xs-12">
          <StockListDisplay stockDataArray={this.state.fresh52Highs} />
        </div>
      </div>
      
    );
  }
}

export default Fresh52Interface
