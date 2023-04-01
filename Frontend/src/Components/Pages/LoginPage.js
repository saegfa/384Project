import {Form, Checkbox, Button, Input, Card} from 'antd'
import background from "../../hacettepe-universitesi.jpg"

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginPage = () => (
  <div style={{margin:'0px 0px 0px',height:'100vh',backgroundImage: `url(${background})`}}>
    <h2 style={{fontSize:'100px',color:'#5e0101',margin:'0vh 75vh 0vh'}}>ICES4HU</h2>
  <Card style={{width:'800px',margin:'15vh 400px 0px'}}>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <a href='./page'>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      </a>
    </Form.Item>
  </Form>
  </Card>
  </div>
);
export default LoginPage;