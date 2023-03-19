import React from "react";
import {Button, Card, Space} from 'antd';

const HomePage = () => {
  return(
    <div>
      <Space direction='horizontal' size='middle'>
        <Card>
          <Button href='/Login'>Login</Button>
        </Card>
      </Space>
    </div>
  )
}

export default HomePage;