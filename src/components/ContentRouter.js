import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import glamorous from 'glamorous';
import NoMatch from './NoMatch';
import HomeComponent from '../containers/HomeComponent';
import HistoricWeather from '../components/HistoricWeather';

const Content = glamorous.div({
  marginTop: 60,
  padding: 10
});

const ContentRouter = () => (
  <Content>
    <Switch>
      <Route path="/" exact={true} component={HomeComponent}/>
      <Route path="/history" exact={true} component={HistoricWeather}/>
      <Route component={NoMatch} />
    </Switch>
  </Content>
);

export default ContentRouter;