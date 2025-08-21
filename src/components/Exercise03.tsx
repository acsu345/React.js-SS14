import React, { Component } from 'react'

export default class Exercise03 extends Component {
  state = {
    companyName: "Rikkei Academy"
  };
  changeCompany = () => {
    this.setState({
      companyName: "RikkeiSoft"
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Company: {this.state.companyName}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    );
  }
}
