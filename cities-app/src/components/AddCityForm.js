// src/components/AddCityForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddCityForm = ({ addCity }) => {
  const [cityData, setCityData] = useState({});
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = () => {
    // Submit city data to the server and add the city to the list
    addCity(cityData);
    navigate('/'); // Use navigate function to redirect
  };

  return (
    <div className="add-city-form-container">
      <h1>Add City</h1>
      <form>
        <TextField
          label="City Name"
          variant="outlined"
          fullWidth
          onChange={e => setCityData({ ...cityData, name: e.target.value })}
        />
        {/* Other input fields */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCityForm;
