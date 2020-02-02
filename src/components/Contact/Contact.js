import React from 'react';
import styles from './App.css';


const Contact = ({ contact }) => {
  return (
    <div className={styles.Contact}>
      <h2>Contact Details</h2>
      <p className="address">
        <span>{name}</span><br />
        <span>{street}<br />
          {city} {state}, {zip}
        </span>
        <span>{phone}</span><br />
        <span>{email}</span>
      </p>
    </div>
  );
};

Contact.propTypes = {
  
  social: PropTypes.shape({
    title: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
