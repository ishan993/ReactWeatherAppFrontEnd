import React from 'react';
import '../../App.css';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ContentRouter from './content-router';
import glamorous from 'glamorous';
import NavBar from './nav-bar';

const AppWrapper = glamorous.div({
    textAlign: 'center'
});

const customHistory = createBrowserHistory();

const App = () => {
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
};

export default App;
