import React from 'react';
import { Form, Input, Button, Icon, Modal } from 'antd';

class NewCalculationModal extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  handleCancel() {
    this.closeModal();
  }

  render() {
    const { onCreate } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        title="Create new calculation"
        centered
        visible={this.state.visible}
        okText="Create"
        onOk={onCreate}
        onCancel={this.handleCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Please input the title of the calculation'
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: 'newCalculationModal' })(
  NewCalculationModal
);
