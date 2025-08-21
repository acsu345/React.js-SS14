import React, { Component } from 'react'

export default class Exercise01 extends Component {
   state = {
    userName: ""
  };
  componentDidMount() {
    this.setState({
      userName: "Phúc Nguyễn"
    });
  }
  render() {
    const { userName } = this.state;
    return (
      <div style={{ fontSize: "20px", padding: "10px" }}>
        <p>Xin chào, {userName} 👋</p>
      </div>
    );
  }
}