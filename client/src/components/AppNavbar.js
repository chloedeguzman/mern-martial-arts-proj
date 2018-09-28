import React, {Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

class AppNavbar extends Component {

  constructor(props) {
    super(props);

    this.toggleStandup = this.toggleStandup.bind(this);
    this.toggleClinch = this.toggleClinch.bind(this);
    this.toggleGround = this.toggleGround.bind(this);
    this.state = {
      standupOpen: false,
      clinchOpen: false,
      groundOpen: false
    };
  }

  toggleStandup() {
    this.setState({
      standupOpen: !this.state.standupOpen
    });
  }
  toggleClinch() {
    this.setState({
      clinchOpen: !this.state.clinchOpen
    });
  }
  toggleGround() {
    this.setState({
      groundOpen: !this.state.groundOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Mixed Martial Arts </NavbarBrand>
            <Dropdown nav isOpen={this.state.standupOpen} toggle={this.toggleStandup}>
            <DropdownToggle nav caret>
              Stand Up
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Boxing</DropdownItem>
              <DropdownItem>Kickboxing</DropdownItem>
              <DropdownItem>Muay Thai</DropdownItem>
              <DropdownItem>Karate</DropdownItem>
              <DropdownItem>Tae Kwon Do</DropdownItem>
              <DropdownItem>Capoeira</DropdownItem>
              <DropdownItem>Combat Sambo</DropdownItem>
              <DropdownItem>Savate</DropdownItem>
              <DropdownItem>Wushu Sanshou</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={this.state.clinchOpen} toggle={this.toggleClinch}>
            <DropdownToggle nav caret>
              Clinch
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem>Judo</DropdownItem>
              <DropdownItem>Freestyle</DropdownItem>
              <DropdownItem>Greco-Roman Wrestling</DropdownItem>
              <DropdownItem>Sambo</DropdownItem>
              <DropdownItem>Wushu Sanshou</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <Dropdown nav isOpen={this.state.groundOpen} toggle={this.toggleGround}>
            <DropdownToggle nav caret>
              Ground
            </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Brazilian Jiu-Jitsu</DropdownItem>
                <DropdownItem>Judo</DropdownItem>
                <DropdownItem>Sambo</DropdownItem>
                <DropdownItem>Catch Wrestling</DropdownItem>
                <DropdownItem>Submission Grappling</DropdownItem>
            </DropdownMenu>
            </Dropdown>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
