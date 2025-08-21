import React, { Component } from "react";

type User = {
    email: string;
    password: string;
    address: string;
}
type StateTypes = {
  user:User;
};

export default class FormMultipleFiled extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      user:{
        email: "",
        password:"",
        address: "",
      }
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        //Lấy ra name và value của từng ô input
        const{ name , value } = event.target;

        //Cập nhật lại giá trị cho state user
        this.setState({
            user:{
                ...this.state.user,
                [name]: value,
            }
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      console.log("UserInfo: ", this.state.user);
    };
    return (
      <div>
        <h3>ControlledForm</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Email</label>
            <input
            name="email"
              value={this.state.email}
              onChange={handleChange}
              type="text"
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Password</label>
            <input
            name="password"
              value={this.state.password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <br />
          <div>
            <label htmlFor="">Address</label>
            <input
            name="address"
              value={this.state.address}
              onChange={handleChange}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}