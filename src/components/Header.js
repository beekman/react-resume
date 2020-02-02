import React, { Component } from 'react';
import styles from './App.css';
export default class Header extends Component {
  render() {
    return (
      <header className={ styles.Header }>
        <h1>Ben Beekman</h1>
      </header>
    );
  }
}
