import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import glamorous from 'glamorous';
import NoMatch from './NoMatch';
import { ConnectedWeatherContainer } from './Weather';
import { ConnectedTimeCapsuleContainer } from './TimeCapsule';
import { ConnectedHistoryContainer } from './History';

const Content = glamorous.div({
  marginTop: 70
});

const ContentRouter = () => (
  <Content>
    <Switch>
      <Route path="/" exact={true} component={
        (props) => <ConnectedWeatherContainer routerProps={props} />} />
      <Route path="/forecast" exact={true} component={
        (props) => <ConnectedWeatherContainer routerProps={props} />} />
      <Route path="/timecapsule" exact={true} component={ ConnectedTimeCapsuleContainer }/>
      <Route path="/history" exact={true} component={
        (props)=> <ConnectedHistoryContainer routerProps={props}/>} />
      <Route component={NoMatch}/>
    </Switch>
  </Content>
);

export default ContentRouter;