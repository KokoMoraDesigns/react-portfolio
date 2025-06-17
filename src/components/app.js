import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Koko Mora portfolio</h1>
        <h2>estoy viva porque siento amor</h2>
        <div>
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      </div>
    );
  }
}
