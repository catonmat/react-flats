import React from 'react';
import Apartment from './apartment.jsx';

const Apartments = ({ apartmentList, selectedApartment, selectApartment }) => {
  const renderList = () => {
    return apartmentList.map((apartment, index) => {
      return (
        <Apartment
          key={ index }
          id={ apartment.id }
          url={ apartment.imageUrl }
          price={ apartment.price }
          name={ apartment.name }
          currency={ apartment.priceCurrency }
          selectedApartment={ selectedApartment }
          selectApartment={ selectApartment }
        />
      )
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default Apartments;
