import { Component } from 'react';
import FormInput from '../form-input/form-input.component';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = ev => {
    const { value, name } = ev.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <h3>Sign in with your email and password.</h3>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email'
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label='password'
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;