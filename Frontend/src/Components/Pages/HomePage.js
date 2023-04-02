import React from "react";
import {Button, Card, Space} from 'antd';
import Student from "../../images/students.png";
import background from "../../hacettepe-universitesi-CpqE_cover.jpg";
import Instructor from "../../instructor.avif";

const HomePage = () => {
  return(
    <div>
      <div style={{height:'100vh',backgroundImage: `url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div>
          <Space direction='horizontal'>
            <h2 style={{fontSize:'100px',color:'#5e0101',margin:'0vh 65vh 0vh'}}>ICES4HU</h2>
            <Button href='/Signup' style={{width:'100px'}}>Sign Up</Button>
          </Space>
        </div>
        <Card style={{margin:'15vh 35vh 0px', backgroundColor:'transparent',borderColor:'transparent'}}>
          <Space direction='horizontal' size='middle'>
            <Card style={{height:'175px', width:'175px',opacity:'0.85'}}>
              <a href='/Student'>
                <img style={{height:'125px', width:'125px'}} src={Student}/>
              </a>
            </Card>
            <Card style={{margin:'0px 200px 0px',height:'175px', width:'175px',opacity:'0.85'}}>
            <a href='/Student'>
              <img style={{height:'125px', width:'125px'}} src={Instructor}/>
            </a>
            </Card>
            <Card style={{margin:'0px 0px 0px',height:'175px', width:'175px',opacity:'0.85'}}>
              <a href='/Student'>
                <img style={{height:'125px', width:'125px'}} src={Student}/>
              </a>
            </Card>
          </Space>
        </Card>
      </div>
    </div>
  )
}

export default HomePage;