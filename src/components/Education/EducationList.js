import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import EducationItem from './EducationItem';

const EducationList = ({ history }) => {
  const Educations = history.map((education, i) => {
    return <li key={ i }>
      <EducationItem education={ education } />
    </li >;
  });

  return (
    <div className={ styles.EducationList } >
      <h3>Work History</h3>
      <ul>
        { Educations }
      </ul>
    </div>
  );
};

EducationList.propTypes = {
  history: PropTypes.array.isRequired
};

export default EducationList;
