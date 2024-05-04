import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    companyName: '',
    minExperience: '', // New state for minimum experience
    location: '', // New state for location
    remote: '', // New state for remote/on-site
    techStack: '', // New state for tech stack
    role: '', // New state for role
    minBasePay: '', // New state for minimum base pay
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleApplyFilters = () => {
    // Call the callback function with the current filters state
    onFilterChange(filters);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Company Name"
          name="companyName"
          value={filters.companyName}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Min Experience"
          name="minExperience"
          value={filters.minExperience}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Remote/On-site"
          name="remote"
          value={filters.remote}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Tech Stack"
          name="techStack"
          value={filters.techStack}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Role"
          name="role"
          value={filters.role}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Min Base Pay"
          name="minBasePay"
          value={filters.minBasePay}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
}

export default Filters;
