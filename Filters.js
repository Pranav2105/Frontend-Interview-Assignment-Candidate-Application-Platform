import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    companyName: '',
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
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
}

export default Filters;
