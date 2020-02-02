import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Job = ({ job }) => {
  return (
    <div className={ styles.Job }>
      <p className='title'>{ job.title }</p>
      <p className='employer'>{ job.employer }</p>
      <p className='startDate'>{ job.employer }</p>
      <p className='endDate'>{ job.employer }</p>
      <p className='jobdescription'>{ job.description }</p>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Job;
