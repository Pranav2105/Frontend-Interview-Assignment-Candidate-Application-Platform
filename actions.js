import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './actionTypes';

export const fetchJobs = () => {
  return dispatch => {
    dispatch(fetchJobsRequest());
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "limit": 10,
        "offset": 0
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

const fetchJobsRequest = () => {
  return {
    type: FETCH_JOBS_REQUEST
  };
};

const fetchJobsSuccess = jobs => {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload: jobs
  };
};

const fetchJobsFailure = error => {
  return {
    type: FETCH_JOBS_FAILURE,
    payload: error
  };
};
