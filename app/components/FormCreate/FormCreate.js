import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import { Select, Form, Input, Button, Icon, Row, Col, Divider } from 'antd';
const { Option } = Select;

import NewCalculationModal from '../../fragments/NewCalculationModal';
import FormSelect from '../../fragments/FormSelect';

import './FormCreate.css';

class FormCreate extends Component {
  constructor() {
    super();

    this.state = {
      // form can have an array of calculations
      // calculation can have 1st field and second field, operator and result
      // field can be custom (entered manually), fetched from the database, or fetched from a calculation result
      masterForm: [],
      // formValues can have an array of calculation values.
      // calculation values can have 1st field and seconf field value and result also an uncontrolled component
      formValues: []
    };

    this.addCalculation = this.addCalculation.bind(this);
    this.createForm = this.createForm.bind(this);
    this.handleCalculationAdded = this.handleCalculationAdded.bind(this);
    this.calculateResults = this.calculateResults.bind(this);
    this.addValue = this.addValue.bind(this);
  }

  addCalculation() {
    this.calculationModal.showModal();
  }

  handleCalculationAdded() {
    const { form } = this.calculationModal.props;
    const { masterForm, formValues } = this.state;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      masterForm.push({
        label1: values.label1,
        label2: values.label2,
        operator: '*', // multiplication, default for now
        result: ''
      });
      formValues.push({
        value1: `${masterForm.length - 1}firstElement`,
        value2: `${masterForm.length - 1}secondElement`,
        result: `${masterForm.length - 1}result`
      });
      this.setState({ masterForm });
      form.resetFields();
      this.calculationModal.closeModal();
    });
  }

  addValue(e, key, value) {
    this.props.form.setFieldsValue({
      [key]: value
    });

    this.calculateResults();
  }

  calculateResults() {
    const self = this;
    const values = this.props.form.getFieldsValue();
    let reg = /\d+/;
    Object.keys(values).forEach(function(key, index) {
      // key: the name of the object key
      // index: the ordinal position of the key within the object
      // Todo improve performance
      let prefix = key.match(reg);

      if (prefix) {
        prefix = key.match(reg)[0];
      } else {
        return '';
      }

      if (values[`${prefix}firstElement`] && values[`${prefix}secondElement`]) {
        self.props.form.setFieldsValue({
          [`${prefix}result`]:
            values[`${prefix}firstElement`] * values[`${prefix}secondElement`]
        });
      }
    });
  }

  createForm(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { masterForm, formValues } = this.state;

    const formItemLayoutWithOutLabel = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 }
    };

    const nestedForm = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    return (
      <div>
        <h2>Form Create</h2>
        <Form layout="horizontal" className="form" onSubmit={this.createForm}>
          <Form.Item label="Form title:" {...formItemLayoutWithOutLabel}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please enter title' }]
            })(<Input />)}
          </Form.Item>
          {masterForm.map((calculation, calculationIndex) => (
            <>
              <Form.Item label={calculation.label1} {...nestedForm}>
                {getFieldDecorator(formValues[calculationIndex].value1, {
                  rules: [
                    {
                      required: true,
                      message: `Please enter a value for ${calculation.label1}`
                    }
                  ]
                })(
                  <FormSelect
                    formKey={formValues[calculationIndex].value1}
                    fromValue={getFieldValue(
                      formValues[calculationIndex].value1
                    )}
                    addValue={this.addValue}
                  >
                    <Option key={1}>Solution 1</Option>
                  </FormSelect>
                )}
              </Form.Item>
              <Form.Item label={calculation.label2} {...nestedForm}>
                {getFieldDecorator(formValues[calculationIndex].value2, {
                  rules: [
                    {
                      required: true,
                      message: `Please enter a value for ${calculation.label2}`
                    }
                  ]
                })(
                  <FormSelect
                    formKey={formValues[calculationIndex].value2}
                    fromValue={getFieldValue(
                      formValues[calculationIndex].value2
                    )}
                    addValue={this.addValue}
                  >
                    <Option key={1}>Solution 1</Option>
                  </FormSelect>
                )}
              </Form.Item>
              <Form.Item label="result" {...nestedForm}>
                {getFieldDecorator(formValues[calculationIndex].result, {
                  rules: [
                    { required: true, message: `Result must contain a value` }
                  ]
                })(<Input />)}
              </Form.Item>
            </>
          ))}
          <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
            <Button
              type="dashed"
              onClick={this.addCalculation}
              style={{ minWidth: '100px' }}
            >
              <Icon type="plus" /> Add Calculation
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 4, offset: 16 }}>
            <Button type="primary" htmlType="submit">
              Save
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

export default Form.create({ name: 'form_create' })(FormCreate);
