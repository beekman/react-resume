import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Skill = ({ skill }) => {
  return (
    <li className={skill.name}>
      { skill.name }</li>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Skill;
