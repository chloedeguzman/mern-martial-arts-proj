import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getMartialArts, deleteMartialArt } from '../actions/martialArtActions';
import PropTypes from 'prop-types';

class MartialArtsList extends Component {

  componentDidMount(){
    this.props.getMartialArts();
  }

  onDeleteClick = (id) => {
    this.props.deleteMartialArt(id);
  }

  render(){
    const {martialArts} = this.props.martialArt;
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className="martial-arts-list">
            {martialArts.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >&times;</Button>
                {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

MartialArtsList.propTypes = {
  getMartialArts: PropTypes.func.isRequired,
  martialArt: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  martialArt: state.martialArt
});

export default connect(
  mapStateToProps,
  { getMartialArts, deleteMartialArt }
)(MartialArtsList);
