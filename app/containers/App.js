import * as React from 'react';

import { ipcRenderer } from 'electron';
import { Link, withRouter } from 'react-router-dom';

import routes from '../constants/routes';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function quit(e) {
  ipcRenderer.send('quit');
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };

    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  render() {
    const { children, history } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">ICTP</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item
              key="1"
              onClick={e => {
                history.push('/');
              }}
            >
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <SubMenu
              key="form"
              title={
                <span>
                  <Icon type="form" />
                  <span>Form</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to={routes.FORMCREATE}>Create</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to={routes.FORM}>List</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" onClick={quit}>
              <Icon type="logout" />
              <span>Exit</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ICTP ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
