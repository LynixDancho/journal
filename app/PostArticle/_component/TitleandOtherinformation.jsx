import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  
  DatePicker,
  Form,
  Input,
 
  
  Select,
 
 
 
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
   return (
    <>
     
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 5,
        }}
        layout="horizontal"
         style={{
          maxWidth: 600,
        }}
        
      >
         
        
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
      
        <Form.Item label="Article Description">
          <TextArea rows={4} />
        </Form.Item>
        
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
         
       
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;