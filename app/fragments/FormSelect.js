import React, { Component } from 'react';
import { Select, Icon, Divider } from 'antd';
const { Option } = Select;

class FormSelect extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      open: false
    };

    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handleAddValue = this.handleAddValue.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleOnSearch(search) {
    this.setState({ search });
  }

  handleAddValue(e) {
    const { formKey, addValue } = this.props;
    const { search } = this.state;
    addValue(e, formKey, search);

    this.handleBlur();
  }

  handleFocus() {
    this.setState({ open: true });
  }

  handleBlur() {
    this.setState({ open: false });
  }

  render() {
    const { children, formKey, addValue, fromValue } = this.props;
    const { search, open } = this.state;

    return (
      <Select
        value={fromValue}
        showSearch
        open={open}
        onSearch={this.handleOnSearch}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        dropdownRender={menu => (
          <div>
            <div
              style={{ padding: '4px 8px', cursor: 'pointer' }}
              onMouseDown={e => e.preventDefault()}
              onClick={this.handleAddValue}
            >
              <Icon type="plus" /> Add value
            </div>
            <Divider style={{ margin: '4px 0' }} />
            {menu}
          </div>
        )}
      >
        {children}
      </Select>
    );
  }
}

export default FormSelect;
