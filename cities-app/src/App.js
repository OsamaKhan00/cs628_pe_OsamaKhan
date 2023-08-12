// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import CitiesList from './components/CitiesList';
import AddCityForm from './components/AddCityForm';
import CityDetails from './components/CityDetails';
import './App.css';

const cities = [
  { id: '1', name: 'New York', country: 'USA', population: '8.4 million' },
  { id: '2', name: 'Paris', country: 'France', population: '2.2 million' },
  // ... other cities
];

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<CitiesList cities={cities} />} />
          <Route path="/add" element={<AddCityForm addCity={newCity => cities.push(newCity)} />} />
          <Route path="/city/:id" element={<CityDetails cities={cities} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
