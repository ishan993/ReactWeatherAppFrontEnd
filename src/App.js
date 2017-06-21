import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import {  BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ContentRouter from './components/ContentRouter';
import glamorous from 'glamorous';
import NavBar from './components/NavBar';

const AppWrapper = glamorous.div({
    textAlign: 'center'
});


const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <BrowserRouter history={customHistory}>
          <div>
            <NavBar />
            <ContentRouter />
          </div>
        </BrowserRouter>
      </AppWrapper>
    );
  }
}

App.propTypes = {
    isBackgroundBlue: PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return ({
        isBackgroundBlue: state.displayProps.isBackgroundBlue
    });
}

export default connect(mapStateToProps)(App);
