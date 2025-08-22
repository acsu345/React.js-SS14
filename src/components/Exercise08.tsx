import React, { Component } from 'react'

import "./exercise08.css"
interface User {
  studentName: string;
  email: string;
  password: string;
  address: string;
}

interface State {
  email: string;
  password: string;
  message: string;
}
export default class Exercise08 extends Component {
state: State = {
    email: "",
    password: "",
    message: ""
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ message: "Email và mật khẩu không được để trống!" });
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const isValid = users.some(
      (u) => u.email === email && u.password === password
    );

    if (isValid) {
      this.setState({ message: "Đăng nhập thành công" });
    } else {
      this.setState({ message: "Đăng nhập thất bại" });
    }
  };

  render() {
    const { email, password, message } = this.state;

    return (
      <div className="login-container">
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <button type="submit">Đăng nhập</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    );
  }
}
