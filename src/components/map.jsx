import React, { Component } from 'react';
import Marker from './marker.jsx';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="map-container" style={{ height: '100vh', width: '50vw'}}>
        <GoogleMapReact
          style={{ height: '100%', width: '100%'}}
          bootStrapURLKeys={ {key: 'AIzaSyCgXKw_-GCVT2unJV7HsitRjBSZVQ1-oEM'} }
          defaultCenter={{ lat: this.props.defLat, lng: this.props.defLon }}
          defaultZoom={11}
        >
          <Marker
          lat={this.props.lat}
          lng={this.props.lon}
          markerText={this.props.markerText}
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
