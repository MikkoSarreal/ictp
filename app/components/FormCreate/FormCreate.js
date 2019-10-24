import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import { Form, Input, Button, Icon } from 'antd';
import NewCalculationModal from '../../fragments/NewCalculationModal';

import './FormCreate.css';

class FormCreate extends Component {
  constructor() {
    super();

    this.addCalculation = this.addCalculation.bind(this);
    this.handleCalculationAdded = this.handleCalculationAdded.bind(this);
  }

  addCalculation() {
    this.calculationModal.showModal();
  }

  handleCalculationAdded() {
    const { form } = this.calculationModal.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.calculationModal.closeModal();
    });
  }

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
              onClick={this.addCalculation}
              style={{ minWidth: '100px' }}
            >
              <Icon type="plus" /> Add Calculation
            </Button>
          </Form.Item>
        </Form>
        <NewCalculationModal
          wrappedComponentRef={c => (this.calculationModal = c)}
          onCreate={this.handleCalculationAdded}
        />
      </div>
    );
  }
}

export default Form.create({ name: 'form' })(FormCreate);
