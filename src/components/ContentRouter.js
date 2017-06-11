import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import glamorous from 'glamorous';
import NoMatch from './NoMatch';
import HomeComponent from '../containers/HomeComponent';

const Content = glamorous.div({
  marginTop: 60,
  padding: 10
});

const ContentRouter = () => (
  <Content>
    <Switch>
      <Route path="/" exact={true} component={HomeComponent}/>
      <Route component={NoMatch} />
    </Switch>
  </Content>
);

export default ContentRouter;