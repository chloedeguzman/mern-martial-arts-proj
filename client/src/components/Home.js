import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage
} from '../utils/storage'

import { connect } from 'react-redux';
import { createNewUser} from '../actions/signUp';
import PropTypes from 'prop-types';

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import {Button} from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token:'',
      email: '',
      password:'',
      username:'',
      firstName: '',
      lastName:''
    }
  }

  componentDidMount(){
    const token = getFromStorage('app');
    if(token) {
      fetch('/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if(json.success) {
            this.setState({
              token,
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false
            })
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }

  }

  onSubmitSignUp = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    this.props.createNewUser(newUser);

  }

  onChangeSignUp = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }


  render() {

    let {
      isLoading,
      token,
      email,
      password,
      username,
      firstName,
      lastName
    } = this.state

    if(isLoading) {
      return(<div><p>Loading...</p></div>);
    }
    if(!token) {
      return(

        // <h1>Sign in</h1>
        // <Form inline onSubmit = {this.onSubmitSignIn}>
        //   <FormGroup>
        //     <Label for="exampleEmail" hidden>Email</Label>
        //       <Input
        //         type="email"
        //         name="email"
        //         id="exampleEmail"
        //         placeholder="Email"
        //       />
        //   </FormGroup>
        //   {' '}
        //   <FormGroup>
        //     <Label for="examplePassword" hidden>Password</Label>
        //       <Input
        //         type="password"
        //         name="password"
        //         id="examplePassword"
        //         placeholder="Password"
        //       />
        //   </FormGroup>
        //   {' '}
        //   <Button>Log in</Button>
        // </Form>

        <Form onSubmit = {this.onSubmitSignUp}>
          <h1>Sign up</h1>
          <FormGroup controlId = "email">
            <ControlLabel>Email</ControlLabel>
              <FormControl
                type="email"
                placeholder="email@email.com"
                value = {this.state.email}
                onChange = {this.onChangeSignUp}
              />
          </FormGroup>

          <FormGroup controlId = "password">
            <ControlLabel >Password</ControlLabel>
              <FormControl
                type="password"
                name="newPassword"
                placeholder="secretpassword123"
                value = {this.state.password}
                onChange = {this.onChangeSignUp}
              />
          </FormGroup>

          <FormGroup controlId = "username">
            <ControlLabel >Username</ControlLabel>
              <FormControl
                type="text"
                name="username"
                placeholder="futureMMAfighter"
                value = {this.state.username}
                onChange = {this.onChangeSignUp}
              />
          </FormGroup>

          <FormGroup controlId = "firstName">
            <ControlLabel>First name</ControlLabel>
              <FormControl
                type="text"
                name="firstName"
                placeholder="Greatest"
                value = {this.state.firstName}
                onChange = {this.onChangeSignUp}
              />
          </FormGroup>

          <FormGroup controlId = "lastName">
            <ControlLabel >Last name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Ever"
                value = {this.state.lastName}
                onChange = {this.onChangeSignUp}
              />
          </FormGroup>
          <Button
            color="dark"
            type="submit"
            style={{marginTop: '2rem'}}
            size="sm"
            block
          >Create Account</Button>
        </Form>

      );
    }
  }


}


Home.propTypes = {
  createNewUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  token: state.token,
  email: state.email,
  password: state.password,
  username: state.username,
  firstName: state.firstName,
  lastName: state.lastName
});

export default connect(
  mapStateToProps,
  { createNewUser }
)(Home);
