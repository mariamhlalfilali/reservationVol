import React, { useState } from 'react';
import "./Search.css"
import { Link } from 'react-router-dom';
const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [travelers, setTravelers] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // Perform search based on the entered values
    // ...

    // Reset input values
    setLocation('');
    setTravelers('');
    setCheckIn('');
    setCheckOut('');
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="travelers">Travelers</label>
        <input
          type="text"
          id="travelers"
          className="form-control"
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          placeholder="Enter number of travelers"
        />
      </div>
      <div className="form-group">
        <label htmlFor="check-in">Check In</label>
        <input
          type="date"
          id="check-in"
          className="form-control"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          placeholder="Enter check-in date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="check-out">Check Out</label>
        <input
          type="date"
          id="check-out"
          className="form-control"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          placeholder="Enter check-out date"
        />
      </div>
      <button type="submit" className="btn btn-primary"><Link to="/Psearch" style={{color:"white",textDecoration:"none"}}>Search</Link></button>
    </form>
  );
};

export default SearchBar;