import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Alex React Redux Router</h1>
        <div>
          <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
        <PortfolioContainer/>
      </div>
    );
  }
}
