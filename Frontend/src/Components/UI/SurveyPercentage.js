import React from "react";
import {Progress, Space} from "antd";

const SurveyPercentage = () =>{
  return(
    <div>
      <Space direction='vertical'>
        <Space direction='horizontal'>
          <label>Choice A</label>
          <Progress style={{width:'200px'}} percent={20}/>
        </Space>
        <Space direction='horizontal'>
          <label>Choice B</label>
          <Progress style={{width:'200px'}} percent={25}/>
        </Space>
        <Space direction='horizontal'>
          <label>Choice C</label>
          <Progress style={{width:'200px'}} percent={45}/>
        </Space>
        <Space direction='horizontal'>
          <label>Choice C</label>
          <Progress style={{width:'200px'}} percent={10}/>
        </Space>
      </Space>
    </div>
  )
}

export default SurveyPercentage;