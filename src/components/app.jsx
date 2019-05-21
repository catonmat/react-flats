import React, { Component } from 'react';
import Apartment from './apartment.jsx';
import Apartments from './apartments.jsx';
import Map from './map.jsx';
import Marker from './marker.jsx';
import flats from '../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apartmentList: flats,
      defaultApartment: flats[0],
      selectedApartment: flats[0]
    }
  }

  selectApartment = (id) => {
    const flat = this.state.apartmentList.filter(flat => flat.id === id)[0];
    this.setState({
      selectedApartment: flat
    })
    console.log(this.state.selectedApartment)
  }

  render() {
    return (
      <div>
        <Apartments
            apartmentList={this.state.apartmentList}
            selectedApartment={this.state.selectedApartment}
            selectApartment={this.selectApartment}
        />
        <Map
            defLat={this.state.defaultApartment.lat}
            defLon={this.state.defaultApartment.lng}
            lat={this.state.selectedApartment.lat}
            lon={this.state.selectedApartment.lng}
            markerText={this.state.selectedApartment.name}
        />
      </div>
    )
  }
}

export default App;
