// src/components/CityDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find(city => city.id === id);

  return (
    <div className="city-details-container">
      <Typography variant="h4">{city.name} Details</Typography>
      <Typography>Country: {city.country}</Typography>
      <Typography>Population: {city.population}</Typography>
      {/* Display other city details */}
    </div>
  );
};

export default CityDetails;
