import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import Job from './Job';


const WorkHistory = ({ history }) => {
  const Jobs = history.map((job, i) => {
    return <li key={ i }>
      <Job job={ job } />
    </li >;
  });

  return (
    <aside className={ styles.WorkHistory } >
      <h3>Work History</h3>
      <ul>
        { Jobs }
      </ul>
    </aside>
  );
};

WorkHistory.propTypes = {
  history: PropTypes.array.isRequired
};

export default WorkHistory;
