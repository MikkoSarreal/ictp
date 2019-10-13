// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import { Form, Row, Col, Input, Button, Icon } from 'antd';

import './FormCreate.css';

class FormCreate extends Component {
  constructor() {
    super();

    this.addComputation = this.addComputation.bind(this);
  }

  addComputation() {}

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        sm: { span: 20, offset: 4 }
      }
    };

    return (
      <div>
        <h2>Form Create</h2>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 12 }}
          className="form"
          onSubmit={this.handleSearch}
        >
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please enter title' }]
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayoutWithOutLabel}>
            <Button
              type="dashed"
              onClick={this.addComputation}
              style={{ minWidth: '100px' }}
            >
              <Icon type="plus" /> Add Computation
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'form' })(FormCreate);
