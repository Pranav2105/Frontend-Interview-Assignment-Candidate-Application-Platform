import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './actionTypes';

// redux/actions.js

export const fetchJobs = (offset = 0) => {
  return dispatch => {
    dispatch(fetchJobsRequest());
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "limit": 10,
        "offset": offset // Use the provided offset parameter
      })
    })
    .then(response => response.json())
    .then(data => {
      dispatch(fetchJobsSuccess(data));
    })
    .catch(error => {
      dispatch(fetchJobsFailure(error.message));
    });
  };
};
