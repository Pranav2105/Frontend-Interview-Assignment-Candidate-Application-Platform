import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  company: {
    color: '#666666',
  },
  location: {
    color: '#666666',
    marginTop: theme.spacing(1),
  },
  description: {
    color: '#333333',
    marginTop: theme.spacing(1),
    lineHeight: 1.5,
  },
  experience: {
    color: '#666666',
    marginTop: theme.spacing(1),
  },
  applyButton: {
    marginTop: theme.spacing(2),
  },
}));

function JobCard({ job }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>{job.title}</Typography>
        <Typography variant="body2" className={classes.company}>{job.company}</Typography>
        <Typography variant="body2" className={classes.location}>{job.location}</Typography>
        <Typography variant="body1" className={classes.description} 
                    onClick={handleExpandClick}>
          {expanded ? job.description : `${job.description.slice(0, 100)}... (Click to expand)`}
        </Typography>
        <Typography variant="body2" className={classes.experience}>Experience: {job.experience}</Typography>
        <Grid container justify="flex-end" className={classes.applyButton}>
          <Button variant="contained" color="primary">Apply</Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default JobCard;
