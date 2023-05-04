import React from 'react';
import {Button, Space} from "antd";
import SurveyPercentage from "./SurveyPercentage";

const ReSurvey = () => {
  return(
    <div>
      <Space direction='vertical' size='middle'>
        <SurveyPercentage/>
        <Button>
          Re-Evaluate Request
        </Button>
      </Space>
    </div>
  )
}

export default ReSurvey;