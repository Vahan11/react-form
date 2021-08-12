/* eslint-disable default-case */
import React, { Component } from "react";
import styles from "./registration.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        val: "",
        errorMessage: "",
      },
      surname: {
        val: "",
        errorMessage: "",
      },
      email: {
        val: "",
        errorMessage: "",
      },
      phone: {
        val: "",
        errorMessage: "",
      },
      pass: {
        val: "",
        errorMessage: "",
      },
      passConf: {
        val: "",
        errorMessage: "",
      },
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validation(e) {
    const type = e.target.name;
    const val = this.state[type].val;

    if (val) {
      switch (type) {
        case "name":
        case "surname":
          if (val.length < 3) {
            this.setError(type, `${type} must be longer than 2 characters`);
          } else {
            this.hideError(type);
          }
          break;
        case "email":
          const emailReg =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!emailReg.test(val)) {
            this.setError(type, "not valid email");
          } else {
            this.hideError(type);
          }
          break;
        case "phone":
          const phoneReg =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

          if (!phoneReg.test(val)) {
            this.setError(type, "not valid phone number");
          } else {
            this.hideError(type);
          }
          break;
        case "pass":
          if (val.length < 6) {
            this.setError(type, `${type} must be minimum 6 characters`);
          } else {
            this.hideError(type);
          }
          break;
        case "passConf":
          const pass = this.state.pass.val;
          if (pass !== val) {
            this.setError(type, "password not match");
          } else {
            this.hideError(type);
          }
          break;
      }
    }
  }

  setError(type, message) {
    this.setState({
      [type]: {
        ...this.state[type],
        errorMessage: message,
      },
    });
  }

  hideError(type) {
    this.setState({
      [type]: {
        ...this.state[type],
        errorMessage: "",
      },
    });
  }

  handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    this.setState({
      [key]: {
        ...this.state[key],
        val,
      },
    });
  }

  render() {
    return (
      <div className={styles.bg}>
        <form>
          <Input
            val={this.state.name.val}
            change={this.handleChange}
            valid={this.validation}
            errorMessage={this.state.name.errorMessage}
            type="text"
            place="Name"
            name="name"
          />
          <Input
            val={this.state.surname.val}
            change={this.handleChange}
            valid={this.validation}
            errorMessage={this.state.surname.errorMessage}
            type="text"
            place="Surname"
            name="surname"
          />
          <Input
            val={this.state.email.val}
            change={this.handleChange}
            valid={this.validation}
            errorMessage={this.state.email.errorMessage}
            type="text"
            place="Email"
            name="email"
          />
          <Input
            val={this.state.phone.val}
            change={this.handleChange}
            valid={this.validation}
            errorMessage={this.state.phone.errorMessage}
            type="number"
            place="Phone number"
            name="phone"
          />
          <Input
            val={this.state.pass.val}
            change={this.handleChange}
            valid={this.validation}
            errorMessage={this.state.pass.errorMessage}
            type="password"
            place="Password"
            name="pass"
          />
          <Input
            val={this.state.passConf.val}
            change={this.handleChange}
            valid={this.validation}
            errorMessage={this.state.passConf.errorMessage}
            type="password"
            place="Confirm password"
            name="passConf"
          />
          <Button btnName="Submit" />
        </form>
      </div>
    );
  }
}
