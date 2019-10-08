// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.css';
import routes from '../../constants/routes';

export default class Form extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
      </div>
    );
  }
}
