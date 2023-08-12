// src/components/CitiesList.js

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CitiesList = ({ cities }) => {
  return (
    <div className="cities-list-container">
      <h1>Cities List</h1>
      <List>
        {cities.map(city => (
          <ListItem key={city.id} button component={Link} to={`/city/${city.id}`}>
            <ListItemText primary={city.name} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/add">
        Add City
      </Button>
    </div>
  );
};

export default CitiesList;
