// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>ICTP Group Project</h2>
        <Link to="/form">Form</Link>
      </div>
    );
  }
}
