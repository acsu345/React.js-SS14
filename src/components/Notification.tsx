import React, { Component } from 'react'

export default class Notification extends Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div style={{ padding: "10px", fontSize: "18px" }}>
        <p>Đây là component Notification</p>
      </div>
    );
  }
}