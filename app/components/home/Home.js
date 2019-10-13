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
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
