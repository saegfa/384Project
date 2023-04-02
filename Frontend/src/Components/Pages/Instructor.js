import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Layout, Menu, Space, theme, Watermark} from 'antd';
import React,{useState} from 'react';
import FormCreationTool from "../InPage/FormCreationTool";
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `Course ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  let title = '';
  if(key==='1'){
    title = 'Closed Forms';
  }else if(key==='2'){
    title = 'Current Forms';
  }else if(key==='3'){
    title = 'Non-Published Forms';
  }
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `${title}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});





const Instructor = () => {
  const [createForm,setCreateForm] = useState(true);
  function onClickFormCreator() {
    setCreateForm(false);
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function onClickPollCreator() {
    setCreateForm(true);
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {!createForm && <FormCreationTool/>}
          </Content>
        </Layout>
      <Watermark content='Hacettepe University'>
        <Space direction='vertical' size='small'>
          <Button style={{width:'200px',margin:'8px 8px 0px',opacity:'1'}} onClick={onClickFormCreator}>Create New Form</Button>
          <Button style={{width:'200px',margin:'8px 8px 0px',opacity:'1'}} onClick={onClickPollCreator}>Create New Poll</Button>
        </Space>
      </Watermark>
      </Layout>
    </Layout>
  );
};

export default Instructor;