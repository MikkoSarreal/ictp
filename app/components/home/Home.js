// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import routes from '../../constants/routes';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>ICTP Government Analytical Laboratory</h2>
        <Link to={routes.FORM}>Form</Link>
      </div>
    );
  }
}
