import React from "react";
import {Button, Card, Space} from 'antd';
import Student from "../../students.png"
import background from "../../hacettepe-universitesi.jpg"

const HomePage = () => {
  return(
    <div style={{height:'100vh',backgroundImage: `url(${background})`}}>
      <h2 style={{fontSize:'100px',color:'#5e0101',margin:'0vh 85vh 0vh'}}>ICES4HU</h2>
        <Card style={{margin:'15vh 35vh 0px'}}>
          <Space direction='horizontal' size='middle'>
            <Card style={{height:'175px', width:'175px'}}>
              <a href='/Student'>
                <img style={{height:'125px', width:'125px'}} src={Student}/>
              </a>
            </Card>
            <Button style={{height:'125px',width:'125px',margin:'16px 80px 0px'}} href='/Student'><br/><br/>Instructor<br/></Button>
            <Button style={{height:'125px',width:'125px',margin:'16px 80px 0px'}} href='/Student'><br/>Department<br/>Manager</Button>
          </Space>
        </Card>
    </div>
  )
}

export default HomePage;