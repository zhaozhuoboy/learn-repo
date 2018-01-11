import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './view/Home';
import About from './view/About';

import './App.css';
const { Header,Content } = Layout;
class App extends Component {
  render() {
    return (
      <Router basename="/app">
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="note">笔记</Menu.Item>
            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App;
