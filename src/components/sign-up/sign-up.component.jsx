import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange = ev => {
    const { value, name } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        if (user) {
          createUserProfileDocument(user, { displayName });
        }
      } catch (error) {
        console.log('Error on user sign up:', error.message);
        alert('ERROR: ' + error.message);
      }
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      alert('Passwords Do Not Match');
      return;
    }
  };

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <h3>Sign up with your email and password.</h3>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='name'
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
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
          <FormInput
            label='confirm password'
            type='confirmPassword'
            name='confirmPassword'
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            required
          />
          <div className='buttons-container'>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
