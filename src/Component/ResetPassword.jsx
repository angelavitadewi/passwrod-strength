import { Button, Col, Form, Input, Progress, Row } from 'antd';
import { useState } from 'react';
import { formRules } from '../Utils/FormRules';
import { checkPassword } from '../Utils/Helper';

const ResetPassword = () => {
  const [form] = Form.useForm();
  const [strongPercentage, setStrongPercentage] = useState(0);

  const handlePassword = (event) => {
    const { value } = event.target;
    const percentage = checkPassword(value);
    setStrongPercentage(percentage);
  };
  const onFinish = (value) => {
    console.log(value);
  };

  const rules = formRules();
  return (
    <Row justify={'center'}>
      <Col sm={8}>
        <Form layout='vertical' form={form} onFinish={onFinish}>
          <Form.Item name='new_password' label='Password' rules={rules.password}>
            <Input.Password onChange={handlePassword} autoComplete='new-password' />
          </Form.Item>
          <Progress percent={strongPercentage} size='small' />
          <Form.Item
            name='confirm_password'
            rules={rules.confirm_password}
            dependencies={['new_password']}
            label='Confirm Password'
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ResetPassword;
