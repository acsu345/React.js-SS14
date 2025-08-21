import React, { Component } from "react";
import "./exercise07.css"
interface User {
  studentName: string;
  email: string;
  password: string;
  address: string;
}

interface State extends User {
  message: string;
}

export default class Exercise07 extends Component {
  state: State = {
    studentName: "",
    email: "",
    password: "",
    address: "",
    message: ""
  };

  private nameInputRef = React.createRef<HTMLInputElement>();

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { studentName, email, password, address } = this.state;

    if (!studentName || !email || !password) {
      this.setState({ message: "Vui lòng nhập đầy đủ thông tin!" });
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const isExist = users.some((u) => u.email === email);
    if (isExist) {
      this.setState({ message: "Email đã tồn tại!" });
      return;
    }

    const newUser: User = { studentName, email, password, address };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState(
      {
        studentName: "",
        email: "",
        password: "",
        address: "",
        message: "Đăng ký tài khoản thành công"
      },
      () => {
        this.nameInputRef.current?.focus();
      }
    );
  };

  render() {
    const { studentName, email, password, address, message } = this.state;

    return (
      <div className="register-container">
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="studentName"
            placeholder="Tên sinh viên"
            value={studentName}
            onChange={this.handleChange}
            ref={this.nameInputRef}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={address}
            onChange={this.handleChange}
          />

          <button type="submit">Đăng ký</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    );
  }
}
