import React, { Component } from 'react'

export default class Exercise06 extends Component {
  state = {
    gender: ""
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      gender: e.target.value
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Giới tính:", this.state.gender);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ padding: "20px" }}>
        <div>
          <label>Giới tính: {this.state.gender}</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            value="Nam"
            onChange={this.handleChange}
            checked={this.state.gender === "Nam"}
          />
          Nam
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            onChange={this.handleChange}
            checked={this.state.gender === "Nữ"}
          />
          Nữ
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            value="Khác"
            onChange={this.handleChange}
            checked={this.state.gender === "Khác"}
          />
          Khác
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}