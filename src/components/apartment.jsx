import React, { Component } from 'react';

class Apartment extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.selectApartment(this.props.id)
  }

  render() {
    return(
      <div className={`card ${this.props.selectedApartment.id === this.props.id ? 'active' : '' } `}
           style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.url}')` }}>
        <div className="card-category"> { this.props.price } { this.props.currency } </div>
        <div className="card-description">
          <h2> { this.props.name } </h2>
        </div>
        <a id="linker" className="card-link" onClick={this.handleClick}>See Me On Map</a>
      </div>
    )
  }
}

export default Apartment
