import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addMartialArt } from '../actions/martialArtActions';


class MartialArtModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = e => {
    e.preventDefault();

    const newMartialArt = {
      name: this.state.name
    }

    this.props.addMartialArt(newMartialArt);

    //Close modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >Add Item</Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add Martial Art</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="martialArt">Martial Art</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Martial Art"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Martial Art</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  martialArt: state.martialArt
});

export default connect(
  mapStateToProps,
  {
    addMartialArt
  }
)(MartialArtModal);
