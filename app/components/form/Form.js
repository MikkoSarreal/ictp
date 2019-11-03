// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.css';
import routes from '../../constants/routes';
import { Button } from 'antd';

export default class Form extends Component {
  render() {
    return (
      <div>
        <h2>Form List</h2>
        <table>
          <tr>
            <th>Title</th>
            <th>Created At</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Opiates Standard and Controls</td>
            <td>{Date().toLocaleString()}</td>
            <td>Mikko Sarreal</td>
            <td>
              <Button type="primary" htmlType="button">
                View
              </Button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
