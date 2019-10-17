import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import "../Contact/css/main.css";
import "../Contact/css/util.css";

var buttonStyle = {
  display: "block",
  margin: "0 auto",
  marginTop: "3rem",
  backgroundColor: "#00AD5F",
  fontFamily: "Orbitron",
  fontSize: "12px",
  padding: "0 20px",
  height: "50px",
}

var wrapStyle = {
  width: "1120px",
  background: "#fff",
  overflow: "hidden",
  display: "-webkit-box",
  display: "-webkit-flex",
  display: "-moz-box",
  display: "-ms-flexbox",
  // display: "flex",
  flexWrap: "wrap",
  alignItems: "stretch",
  flexDirection: "row-reverse"
}

var formStyle = {
  width: "50%",
  display: "-webkit-box",
  display: "-webkit-flex",
  display: "-moz-box",
  display: "-ms-flexbox",
  display: "flex",
  flexWrap: "wrap",
  margin: "0 auto",
  padding: "56px 55px 63px 55px"
}

var h4Style = {
  marginTop: "3rem",
  color: "green"
}

var pStyle = {
  fontFamily: 'Orbitron',
  fontSize: "12px",
  marginTop: "4rem"
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
        <div className="container-contact100">
          <div style={wrapStyle}>
            <h4 className="text-center" style={h4Style}>Please Enter Credentials to Access Client Accounts</h4>
            <form className="validate-form" style={formStyle}>
              <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username..."
                  value={this.state.username}
                  onChange={this.handleChange}
                >
                </input>
                <span className="focus-input100"></span>
              </div>
              <br />
              <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password..."
                  value={this.state.password}
                  onChange={this.handleChange}
                >
                </input>
                <span className="focus-input100"></span>
              </div>
              <button onClick={this.handleSubmit} className="btn btn-dark rounded-0" style={buttonStyle}> LOGIN</button>
              <p className="text-center" style={pStyle}>Attempts at unathorized access constitute a Federal crime in accordance with section 18 of U.S.C. § 1028 of the <br /><i>Identity Theft and Assumption Deterrence Act of 1998</i></p>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default LoginForm
