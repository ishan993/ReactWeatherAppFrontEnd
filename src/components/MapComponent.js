import React, {Component} from 'react';
import glamorous from 'glamorous';
import {withGoogleMap, GoogleMap} from 'react-google-maps';

const DivWrapper = glamorous.div({
    height: 400,
    width: 'auto',
    background: 'palevioletred'
});

const SimpleMapExampleGoogleMap = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.7127837, lng: -74.005941}}
  />
));


export default class MapComponent extends Component{
    render(){
        return (<DivWrapper>
                     <SimpleMapExampleGoogleMap
                        containerElement={
                          <div style={{ height: '100%' }} />
                            }
                        mapElement={
                            <div style={{ height: '100%' }} />
                         }

                    />
                </DivWrapper>
        );
    }
}