import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import { fetchJobs } from './redux/actions';
import Filters from './components/Filters';
import JobCard from './components/JobCard';

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const loading = useSelector(state => state.loading);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    setFilteredJobs(jobs); // Initially, display all jobs
  }, [jobs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Fetch more jobs when user scrolls to the bottom
      fetchMoreJobs();
    }
  };

  const fetchMoreJobs = () => {
    setOffset(prevOffset => prevOffset + 10); // Increment offset
    dispatch(fetchJobs(offset)); // Fetch jobs with updated offset
  };

  // Function to filter jobs based on selected filter criteria
  const handleFilterChange = (filters) => {
    // You can implement filtering logic here
    // For demonstration purpose, we will filter jobs by company name
    const filtered = jobs.filter(job => job.company.toLowerCase().includes(filters.companyName.toLowerCase()));
    setFilteredJobs(filtered);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Job Listings
      </Typography>
      <Filters onFilterChange={handleFilterChange} />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {filteredJobs.map(job => (
            <Grid item key={job.id} xs={12}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default App;
