import React, { Component } from 'react'

type StateTypes = {
    email: string;
    password: string;
};
export default class ControlledForm extends Component<object, StateTypes> {
    constructor(props:object){
        super(props)
        this.state = {
            email:"",
            password: "",
        }
    }
  render() {
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value
        })
    }
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            password: event.target.value
        })
    }
    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();

        const { email, password } = this.state;

        const userInfo = {
            email: email,
            password: password,
        }
        console.log("User Info: ", userInfo);
        
    }
    return (
      <div>
        <h3>ControlledForm</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input
                value={this.state.email} 
                onChange={handleChangeEmail}
                type="email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input 
                value={this.state.password} 
                onChange={handleChangePassword}
                type="password" />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
        </div>
    )
  }
}
