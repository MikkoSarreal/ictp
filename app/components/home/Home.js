// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import routes from '../../constants/routes';
import { ipcRenderer } from 'electron';

function quit(e) {
  e.preventDefault();

  ipcRenderer.send('quit');
}

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Dashboard</h2>
        <ul className={styles.list}>
          <li>
            <Link to={routes.FORM}>Form Builder</Link>
          </li>
          <li>
            <Link to={routes.FORM}>Archives</Link>
          </li>
          <li>
            <a onClick={quit} src="#">
              Exit
            </a>
            {/* <Link to={routes.FORM}>Exit</Link> */}
          </li>
        </ul>
      </div>
    );
  }
}
