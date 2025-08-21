import React, { Component } from 'react'

export default class Exercise04 extends Component {
  state = {
    slogan: "Học code để đi làm"
  };

  changeSlogan = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!!"
    });
  };

  sshouldComponentUpdate(nextProps: object, nextState: { slogan: string }) {
  return nextState.slogan.includes("thành công");
}

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Slogan: "{this.state.slogan}"</h1>
        <button onClick={this.changeSlogan}>Change state</button>
      </div>
    );
  }
}