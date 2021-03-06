import React from "react";
import { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends Component<{}, { email: string; password: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (ev: any) => {
    ev.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (ev: any) => {
    const { value, name } = ev.target;
    // @ts-ignore
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <h3>Sign in with your email and password.</h3>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons-container">
            <CustomButton isGoogleSignIn={false} inverted={false} type="submit">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn={true}
              inverted={false}
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
