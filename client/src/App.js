import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MyContent from './mycontent'

const {Footer,Header,Content} = Layout
export default function (){
    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Reservation Management</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Reservations</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}> <MyContent></MyContent></div>
         
        </Content>
        <Footer style={{ textAlign: 'center' }}>Hilton Reservation Demo©2023 Created by Lee</Footer>
      </Layout>
    )
}