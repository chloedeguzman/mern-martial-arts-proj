import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import MartialArtsList from './components/MartialArtsList';
import MartialArtModal from './components/MartialArtModal';
import SignUp from './components/SignUp';
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <SignUp />
          <Container>
            <MartialArtModal />
            <MartialArtsList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
