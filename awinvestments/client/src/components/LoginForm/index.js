import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

var inputStyle = {
  display: "block",
  width: "100%",
  height: "1.75rem",
  background: "transparent",
  fontFamily: "Poppins-Regular",
  fontSize: "18px",
  color: "#666666",
  lineHeight: "1.2",
  padding: "0 25px",
  border: "solid",
  marginTop: "1rem"
}

var buttonStyle = {
  display: "block", 
  margin: "0 auto", 
  marginTop: "2rem", 
  marginBottom: "2rem", 
  backgroundColor: "#00AD5F", 
  fontFamily: "Orbitron", 
  fontSize: "12px", 
  padding: "0 20px", 
  height: "50px"
}

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    // this.googleSignin = this.googleSignin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')
    this.props._login(this.state.username, this.state.password)
    this.setState({
      redirectTo: '/account'
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="LoginForm">
          <form>
            <span ><input
              placeholder="Username..."
              style={inputStyle}
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            /></span>
            <span><input
              placeholder="Password..."
              style={inputStyle}
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            /></span>
            <button onClick={this.handleSubmit} className="btn btn-dark rounded-0" style={buttonStyle}> LOGIN</button>
          </form>
        </div >
      )
    }
  }
}

export default LoginForm
