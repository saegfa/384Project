import {Form, Checkbox, Button, Input, Card, DatePicker} from 'antd'
import background from "../../hacettepe-universitesi-CpqE_cover.jpg"

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const SignUp = () => (
  <div style={{margin:'0px 0px 0px',height:'100vh',backgroundImage: `url(${background})`,backgroundSize:'cover'}}>
    <h2 style={{fontSize:'100px',color:'#5e0101',margin:'0vh 75vh 0vh'}}>ICES4HU</h2>
    <Card style={{width:'800px',margin:'15vh 400px 0px',opacity:'0.97'}}>
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
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
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
          label="Re-Enter Password"
          name="passwordcheck"
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
          label="Birth Date"
          name="birth"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <a href='/'>
            <Button>
              Submit
            </Button>
          </a>
        </Form.Item>
      </Form>
    </Card>
  </div>
);
export default SignUp;