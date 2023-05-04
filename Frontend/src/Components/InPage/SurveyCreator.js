import React from "react";
import 'antd';
import {Button, Checkbox, Form, Input, Space} from "antd";
import FormCreationTool from "./FormCreationTool";
import SurveyChoiceTool from "./SurveyChoiceTool";

const SurveyCreator = () => {
  return(
    <div>
      <Input style={{margin:'8px 0px 0px'}}></Input>
      <SurveyChoiceTool/>
    </div>
  )
}

export default SurveyCreator;