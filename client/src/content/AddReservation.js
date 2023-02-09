import React  from 'react'
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import {ADD_RESERVATION, GET_ALL_RESERVATIONS} from '../query';

function AddReservation(props) {
    const formItemLayout ={
        labelCol: { span: 8 },
        wrapperCol: { span: 14 },
      }
    const buttonItemLayout ={
        wrapperCol: { span: 14, offset: 4 },
      }
    const { getFieldDecorator } = props.form;
    const [addReservation]=useMutation(ADD_RESERVATION)
    function handleSubmit(e){
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received params values of form: ', values);
            addReservation({variables:values,refetchQueries:[{query:GET_ALL_RESERVATIONS}]})
          }
        });
    }
    return (
        <div style={{flex:'1'}} >
        <Form layout="horizontal" onSubmit={handleSubmit}>
          <Form.Item label="Add Reservation" {...formItemLayout}>
          </Form.Item>

        <Form.Item label="UserName" {...formItemLayout}>
           {getFieldDecorator('userName', {
               rules: [{ required: true, message: 'input user name' }],
           })(
               <Input placeholder="input user name"/>,
           )}
        </Form.Item>

        <Form.Item label="phoneNumber" {...formItemLayout}>
           {getFieldDecorator('phoneNumber', {
               rules: [{ required: true, message: 'input phone number' }],
           })(
               <Input placeholder="input phone number"/>,
           )}
        </Form.Item>

        <Form.Item label="arriveTime" {...formItemLayout}>
           {getFieldDecorator('arriveTime', {
               rules: [{ required: true, message: 'input arrive time' }],
           })(
               <Input placeholder="input arrive time"/>,
           )}
        </Form.Item>

        <Form.Item label="tableSize" {...formItemLayout}>
            {getFieldDecorator('tableSize', {
                rules: [{ required: true, message: 'input table size' }],
            })(
                <Input placeholder="input table size"/>,
            )}
        </Form.Item>


        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">submit</Button>
        </Form.Item>
        </Form>
        </div>
    )
}

const WrappedForm = Form.create({})(AddReservation);

export default WrappedForm